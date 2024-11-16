const images = ["./Images/bird_1.jpg","./Images/bird_2.jpg","./Images/bird_3.jpg","./Images/bird_4.jpg","./Images/bird_5.jpg"];
        let index = 0;
        const slide = document.getElementById('slide');

        function next(){
            if(index < images.length-1){
            index++;
            }
            else{
                index= 0;
            }
            slide.src= images[index];
        }
        function prev(){
            if(index > 0){
                index--;
            }
            else{
                index = images.length-1;
            }
            slide.src = images[index];
            
        }
        