$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: './images/1.jpg' },	//1枚目の写真指定
            { src: './images/2.jpg' },	//2枚目の写真指定
            { src: './images/3.jpg' },	//3枚目の写真指定
	    { src: './images/4.jpg' },  //4枚目の写真指定
        ],
		transition: 'fade',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		timer: false,				//プログレスバーを非表示に。
    });
});
