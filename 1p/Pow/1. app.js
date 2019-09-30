(function(){
    window.onload = ()=>{
      //Set options for the chart
      var options = {
        chart: {
            height: 350,
            type: 'line',
            // zoom: {
            //   enabled:false
            // }
        },
        // dataLabels: {
        //     enabled: false
        // },
        // markers:{
        //   size:0,
        // },
        stroke: {
            curve: 'straight'
        },
        series: [{
            name: "Y",
            data: [30]
        }],
        title: {
            text: 'X^2 Graph',
            align: 'center'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan'],
        },
      };
      
      // Get the input values and make the log table and then represent the data in the chart
      const btnSubmit = document.getElementById("btnCreateGraph");
      var timesPressed = 0;
  
      btnSubmit.addEventListener("click",(e)=>{
        e.preventDefault();
        const txtUpTo = document.getElementById("txtUpTo");
        let errorsContainer = document.getElementById("errorsContainer");
        // let errorsContainer = document.getElementById("errors");
        let errors = '';
  
        if(txtUpTo.value === ''){
          errors+= '<li>El campo de la "UpTo" no puede estar vacío. (como su corazón) </li>';
        }
        else if(!Number.isInteger(parseFloat(txtUpTo.value))){
          errors+= '<li>El valor del campo "UpTo" debe ser un número entero </li>';
        }
  
        if(errors != ''){
          errorsContainer.children[1].innerHTML = errors;
          errorsContainer.style.display = "block";
        }
        else{
          /**
           * Prints the table of power of 2 from 1 to a number given
           * @param upTo {number} 
           * @returns 
           */
          const tablePower2 = (upTo) =>{
            let arrNumber = [];
            let arrResult = [];
            for(let i=1;i<= upTo; i++){
                arrNumber.push(i);
                arrResult.push(Math.pow(i,2));
            }
            return [arrNumber,arrResult];
            }
          
  
          const data = tablePower2(parseInt(txtUpTo.value));
          let chartContainer  = document.querySelector("#chart");
          chartContainer.innerHTML = "";
          
          // if(timesPressed > 0 ){
          //   //Load the chart
          // var chart = new ApexCharts(document.querySelector("#chart"),options);
          // let series = [
          //   {
          //   name: 'South',
          //   data: [1,2,3,4,5,6,7,8,10]
          // }];
          //   chart.updateSeries(series);
          // }else{
            options.xaxis.categories = data[0];
            options.series[0].data = data[1];
              //Load the chart
            var chart = new ApexCharts(chartContainer,options);
            chart.render();
            // timesPressed++;
          // }
  
          
        
        }
        
      });
  
    };
  })();
  