/**
 * 日志打印组件
 */
export default class Log {
  /**
   * 错误日志
   * @param message
   */
  static error(message: any) {
    console.log(
      '%c【ERROR:' + message + '】',
      'color:#FF2D55;font-weight:bold;',
    );
    console.trace();
  }

  /**
   * 信息日志
   * @param message
   */
  static info(message: any) {
    console.log('%c【INFO:' + message + '】', 'color:gray;font-weight:bold;');
  }
}
