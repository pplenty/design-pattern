/**
 @FileName    : test
 @Description :
 @Author      : yusik
 @Since       : 2018-11-29
 @Version     : 1.0
 @개정이력     :
 수정일             수정자             수정내용
 ----------        -------------    ----------------------------
 2018-11-29           yusik          최초생성
 */

class CarFactory {

    constructor(...arg) {

        this.instances = [];
        arg.forEach(instance => this.instances.push(instance))
    }

}