            var cur = 1;
            document.getElementById("next_button").addEventListener('click', function() {
                cur = cur + 1;
                if(cur == 2) {
                    document.getElementById('1').style.display = 'none';
                    document.getElementById('2').style.display = 'block';
                    document.getElementById('name').innerHTML = 'Me';
                } else if(cur == 3) {
                    document.getElementById('2').style.display = 'none';
                    document.getElementById('3').style.display = 'block';
                    document.getElementById('name').innerHTML = 'My brother';
                } else if(cur == 4) {
                    document.getElementById('3').style.display = 'none';
                    document.getElementById('4').style.display = 'block';
                    document.getElementById('name').innerHTML = 'My mother';
                } else if(cur == 5) {
                    document.getElementById('4').style.display = 'none';
                    document.getElementById('5').style.display = 'block';
                    document.getElementById('name').innerHTML = 'My father';
                } else if(cur == 6) {
                    document.getElementById('5').style.display = 'none';
                    document.getElementById('6').style.display = 'block';
                    document.getElementById('name').innerHTML = 'My grandmother';
                } else if(cur == 7) {
                    document.getElementById('6').style.display = 'none';
                    document.getElementById('1').style.display = 'block';
                    document.getElementById('name').innerHTML = '';
                    cur = 1;
                }
            });
            // function next() {
                
            // }