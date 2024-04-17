/*
 * @Description: 
 * @Author: Wang Su
 * @Date: 2024-01-16 17:35:54
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-16 17:36:01
 */
// 自定义指令文件

import Vue from 'vue';

/**权限指令**/
const has = Vue.directive('has', {
  bind: function (el, binding, vnode) {
    // 获取按钮权限
    let userInfo = vnode.context.$store.state.common.userInfo; //用户信息
    if (userInfo.roleScope !== "2") {
      if (el.className.indexOf('is-disabled') === -1) {
        el.classList.add("is-disabled")
      }
      el.disabled = true;
    }
  }
});

/**弹窗拖拽指令**/
let left, top;
// v-dialogDrag: 弹窗拖拽
const DialogDrag = Vue.directive('dialogDrag', {
  bind (el, binding, vnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    dialogHeaderEl.style.cssText += ';cursor:move;'
    dragDom.style.cssText += ';top:0px;'

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const getStyle = (function () {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr]
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr]
      }
    })()

    dialogHeaderEl.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop

      const dragDomWidth = dragDom.offsetWidth
      const dragDomHeight = dragDom.offsetHeight

      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight

      document.onselectstart = function () { return false; } //移除鼠标选中效果，
      // 获取到的值带px 正则匹配替换
      let styL = getStyle(dragDom, 'left')
      let styT = getStyle(dragDom, 'top')

      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
      } else {
        styL = +styL.replace(/\px/g, '')
        styT = +styT.replace(/\px/g, '')
      }

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX
        let top = e.clientY - disY

        // 边界处理
        if (-(left) > minDragDomLeft) {
          left = -minDragDomLeft
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft
        }

        if (-(top) > minDragDomTop) {
          top = -minDragDomTop
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`

        // emit onDrag event
        vnode.child.$emit('dragDialog')
      }

      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
        document.onselectstart = function () { return true; }
      }
    }
  }
})

// v-dialogDragWidth: 弹窗宽度拖大 拖小
const DialogDragWidth = Vue.directive('dialogDragWidth', {
  bind (el, binding, vnode, oldVnode) {
    // const dragDom = binding.value.$el.querySelector('.el-dialog')
    let i = document.createElement('i');
    i.style.position
    const dragDom = el.querySelector('.el-dialog');
    el.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - el.offsetLeft

      document.onmousemove = function (e) {
        e.preventDefault() // 移动时禁用默认事件

        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX
        dragDom.style.width = `${l}px`
      }

      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})

// v-dialogFullScreen: 双击头部全屏
const DialogFullScreen = Vue.directive('dialogFullScreen', {
  bind (el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    //双击头部全屏效果
    let isFullScreen = false;
    let nowHight = 0
    let nowWidth = 0
    let nowMarginTop = 0
    let nowMarginBottom = 0
    dialogHeaderEl.ondblclick = (e) => {
      if (isFullScreen == false) {
        nowHight = dragDom.clientHeight;
        nowWidth = dragDom.clientWidth;
        nowMarginTop = dragDom.style.marginTop;
        nowMarginBottom = dragDom.style.marginBottom;
        dragDom.style.left = 0;
        dragDom.style.top = 0;
        dragDom.style.height = "100%";
        dragDom.style.width = "100%";
        dragDom.style.marginTop = 0;
        dragDom.style.marginBottom = 0;
        isFullScreen = true;
      } else {
        dragDom.style.height = nowHight + 'px';
        dragDom.style.width = nowWidth + 'px';
        dragDom.style.marginTop = nowMarginTop;
        dragDom.style.marginBottom = nowMarginBottom;
        isFullScreen = false;
      }
    }
  }
})

//监听元素宽高重绘
const resize = Vue.directive('resize', {
  bind (el, binding) { // el为绑定的元素，binding为绑定给指令的对象
    let width = '', height = '';
    function isReize () {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value();  // 关键
      }
      width = style.width;
      height = style.height;
    }
    el.__vueSetInterval__ = setInterval(isReize, 300);
  },
  unbind (el) {
    clearInterval(el.__vueSetInterval__);
  }
})


const tableLoadmore=Vue.directive('tableLoadmore', {
  bind(el, binding) {
    const selectWrap = el.querySelector('.el-table__body-wrapper')
    let timer=null;
    selectWrap.addEventListener('scroll',(e)=>{
      let that=e.target;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // 关键点：vue的自定义指令传递的参数binding如果是一个函数，则通过binding.value()来执行
        let sign = 100
        const scrollDistance = that.scrollHeight - that.scrollTop - that.clientHeight;
        if (scrollDistance <= sign) {
          binding.value()
        }
      }, 500)
    })
  }
})

//限制输入框小数位数以及整数
const inputImit=Vue.directive("input-limit", {
  bind(el, binding) {
    var wins_0 = /[^\d]/g //整数判断
    var wins_1 = /[^\d^\.]/g //小数判断
    var flag = true;
    var points = 0;
    var lengths = 0
    var remainder = 0
    var no_int = 0
    const target = el instanceof HTMLInputElement ? el : el.querySelector("input");
    target.addEventListener("compositionstart", e => {
      flag = false;
    });
    target.addEventListener("compositionend", e => {
      flag = true;
    });
    target.addEventListener("input", e => {
      setTimeout(function() {
        if (flag) {
          if (binding.value == 0) {
            if (wins_0.test(e.target.value)) {
              e.target.value = e.target.value.replace(wins_0, "");
              e.target.dispatchEvent(new Event("input")) //手动更新v-model值
            }
          }
          if (binding.value == 1) {
            if (wins_0.test(e.target.value.toString().replace(/\d+\.(\d*)/, '$1'))) {
              remainder = true
            }
            if ((e.target.value.split('.')).length - 1 > 1) {
              points = true
            }
            if (e.target.value.toString().split(".")[1] != undefined) {
              if (e.target.value.toString().split(".")[1].length > 1) {
                lengths = true
              }
            }
            if (e.target.value.toString().indexOf(".") != -1) {
              no_int = false
            } else {
              no_int = true
            }
            if (wins_1.test(e.target.value) || lengths || points || remainder) {
              if (!no_int) {
                e.target.value = e.target.value.replace(wins_1, "").replace('.', '$#$').replace(/\./g, '').replace(
                  '$#$', '.').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3').substring(0, e.target.value.indexOf(
                  ".") + 2)
              } else {
                e.target.value = e.target.value.replace(wins_0, "")
              }
              e.target.dispatchEvent(new Event("input"))
            }
          }


          if (binding.value == 2) {
            if (wins_0.test(e.target.value.toString().replace(/\d+\.(\d*)/, '$1'))) {
              remainder = true
            }
            if ((e.target.value.split('.')).length - 1 > 1) {
              points = true
            }
            if (e.target.value.toString().split(".")[1] != undefined) {
              if (e.target.value.toString().split(".")[1].length > 2) {
                lengths = true
              }
            }
            if (e.target.value.toString().indexOf(".") != -1) {
              no_int = false
            } else {
              no_int = true
            }
            if (wins_1.test(e.target.value) || lengths || points || remainder) {
              if (!no_int) {
                e.target.value = e.target.value.replace(wins_1, "").replace('.', '$#$').replace(/\./g, '').replace(
                  '$#$', '.').replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3').substring(0, e.target.value.indexOf(
                  ".") + 3)
              } else {
                e.target.value = e.target.value.replace(wins_0, "")
              }
              e.target.dispatchEvent(new Event("input"))
            }
          }
        }
      }, 0)
    })
  }
})

export { has, DialogDrag, DialogFullScreen,resize,tableLoadmore,inputImit }