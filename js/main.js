!function () {
  let duration = 50
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings().removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 90
        break;
      case 'normal':
        duration = 50
        break;
      case 'fast':
        duration = 10
        break
      default:
        break;
    }

  })
  function writeCode(prefix,code,fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let timer 
    timer = setTimeout(function run(){
      n++
      container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if (n < code.length){
        timer = setTimeout(run,duration)
      }else {
        fn && fn.call()
      }
    }, 50);
  }

  let code = `
  /**
   * 首先需要有一个展示制作过程的地方
   */
  .code-wrapper{
    background: #dedede;
  }
  /**
   * 接下来需要有展示皮卡丘的地方
   */
  .preview-wrapper {
    background: #fee433;
  }
  .preview {
    top: 50%;
    margin-top: -83px;
    width: 100%;
    position: relative;
  }
  /**
   * 我们首先画出皮卡丘的黑色鼻子
   */
  .nose {
    position: absolute;
    left: 50%;
    border-radius: 50%;
    border-style: solid;
    border-width: 10px 12px;
    border-color: black transparent transparent transparent;
    top: 28px;
    margin-left: -10px;
  }
  /**
   * 接着我们画出它的双眼
   */
  .eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
  }
  /**
   * 黑色的眼睛要出现白色的瞳孔，才会显得很有神气
   */
  .eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: #fff;
    position: absolute;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
    border-radius: 50%;
  }
  /**
   * 但是他们好像不应该在这里，接下来我们让他到该去额地方
   */
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }
  /**
   * 皮卡丘是害羞的，我们要让他有两个红色的脸蛋
   */
  .face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 85px;
  }
  /**
   * 让他们待在该去的地方
   */
  .face.left {
    right: 50%;
    margin-right: 116px;
  }

  .face.right {
    left: 50%;
    margin-left: 116px;
  }
  /**
   * 嘴巴是比较难刻画的地方
   * 可能他原来是个🐰，🥕磨平了👄所以成了皮卡丘
   */
  .upperLip {
    height: 20px;
    width: 80px;
    border: 3px solid #000;
    top: 52px;
    position: absolute;
    background: #fee433;
  }
  /**
   * 变化的过程请你耐心等待一下吧
   */
  .upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-15deg);
  }
  .upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(15deg);
  }
  .lowerLip-wrapper {
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom: -215px;
    width: 300px;
    height: 155px;
    overflow: hidden;
  }
  /**
   * 舌头是一个厉害的东西
   * 本来他是很大的，但是我们要想办法把他隐藏一部分
   */
  .lowerLip {
    width: 300px;
    height: 3500px;
    position: absolute;
    bottom: 0px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 1px solid #000;
    overflow: hidden;
  }
  /**
   * 这样才成了最终的模样
   */
  .lowerLip::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 150px;
    height: 150px;
    background: #fc4a62;
    left: 50%;
    margin-left: -75px;
    border-radius: 80px;
  }
  /**
   * 谢谢你，观赏这个过程
   * 送你一朵玫瑰🌹表示感谢。That's all
   */
  `
  writeCode('', code)
  
}.call()