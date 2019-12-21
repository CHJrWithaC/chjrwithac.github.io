
// $( document ).ready(function() {
//     function findText(element, pattern, callback) {
//         for (var childi= element.childNodes.length; childi-->0;) {
//             var child= element.childNodes[childi];
//             if (child.nodeType==1) {
//                 findText(child, pattern, callback);
//             } else if (child.nodeType==3) {
//                 var matches= [];
//                 var match;
//                 while (match= pattern.exec(child.data))
//                     matches.push(match);
//                 for (var i= matches.length; i-->0;)
//                     callback.call(window, child, matches[i]);
//             }
//         }
//     }

//     findText(document.body, /\bNak\b/g, function(node, match) {
//         var span = document.createElement('mark');
//         span.className = 'gradient_text_style_1';
//         node.splitText(match.index+3);
//         span.appendChild(node.splitText(match.index));
//         node.parentNode.insertBefore(span, node.nextSibling);
//     });
//     findText(document.body, /\bRamshackle\b/g, function(node, match) {
//         var span = document.createElement('mark');
//         span.className = 'gradient_text_style_1';
//         node.splitText(match.index+13);
//         span.appendChild(node.splitText(match.index));
//         node.parentNode.insertBefore(span, node.nextSibling);
//     });
// });