{"filter":false,"title":"testUtility.js","tooltip":"/ui-test/full/common/testUtility.js","undoManager":{"mark":31,"position":31,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":34}},"text":"function executeInFlow(fn, done) {"},{"action":"insertText","range":{"start":{"row":0,"column":34},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":14,"column":0}},"lines":["    webdriver.promise.controlFlow().execute(fn).then(function() {","        done();","    }, done);","}","","function takeScreenshotOnFailure(test) {","    if (test.status != 'passed') {","        ","        var scrpath = path.resolve(__dirname, 'screenshots/') + test.title.replace(/\\W+/g, '_').toLowerCase() + '.png';","        driver.takeScreenshot().then(function(data) {","            fs.writeFileSync(scrpath, data, 'base64');","        });","    }"]},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":23},"end":{"row":0,"column":32}},"text":"webdriver"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":32},"end":{"row":0,"column":33}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":33},"end":{"row":0,"column":34}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":33},"end":{"row":6,"column":39}},"text":"driver"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":39},"end":{"row":6,"column":40}},"text":","}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":40},"end":{"row":6,"column":41}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":2,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":1},"end":{"row":0,"column":2}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":2},"end":{"row":0,"column":3}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":3},"end":{"row":0,"column":4}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":5}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":5},"end":{"row":0,"column":6}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":6},"end":{"row":0,"column":7}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":7},"end":{"row":0,"column":8}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":8},"end":{"row":0,"column":9}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":9},"end":{"row":0,"column":10}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":12}},"text":"q"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":18}},"text":"()"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":19}},"text":"''"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":22},"end":{"row":0,"column":23}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":0},"end":{"row":1,"column":27}},"text":"var path = require('path');"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":27},"end":{"row":2,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":0},"end":{"row":2,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416536474927,"hash":"3e079870f93295e2b5303bd804f7d5a39aa1573a"}