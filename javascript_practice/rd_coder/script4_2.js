//module pattern

let view;
function likeTheVideo(){
    let called = 0;


   return function () { if( called === 0) {
    view = 'Road side coder'
        console.log("Subscribe to", view);
        called++
    } else {
        console.log('already subscribed ');
    }
}
}

likeTheVideo()();
likeTheVideo()();
likeTheVideo()();



let isSusbscribed = likeTheVideo();
console.log(isSusbscribed);

isSusbscribed();
isSusbscribed();
isSusbscribed();
isSusbscribed();

//question 8 and 9 pending in clsoures javascript interview

