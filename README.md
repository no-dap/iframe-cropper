# IframeCropper
iframe 내부에서 외부 화면을 크롭 가능한지 테스트하는 레포입니다.  
결론 : 불가능 (당연히 CORS때문에 안된다)  
외부에서 화면을 캡쳐한 후에 내부로 DataURL을 보내주는 방식 말고는 딱히 해법이 보이지 않습니다.  
지금 이 기능을 위해 [cropperjs](https://github.com/fengyuanchen/cropperjs), [html2canvas](http://html2canvas.hertzen.com/) 두 라이브러리를 사용했는데  
둘 다 cdn으로 불러올 수 있고, 용량이 그리 크지 않아(kb단위) 사용해도 무방할 것으로 보입니다.  
