// CityController = (function() {
var CityController = (function() {
    
  // Data Store
  const Parks = {
      name: ['Green', 'National', 'Oak'],
      numbTrees: [800, 1400, 760],
      parkArea: [2, 1, 1],
      yearBuilt: [1947, 1950, 1935]
  };
  
  const Streets = {
      name: ['Ocean Avenue', 'Evergreen Street', '4th Street', 'Sunset Boulevard'],
      size: ['big', 'small', 'normal', 'huge'],
      yearBuilt: [1999, 2008, 2015, 1982],
      length: [2.5, .75, 1.5, 5.25]   
  };

  let parkReport = {
      averageParkAge: 0,
      treeDensity: [0,0,0,0]
  };
      
  let StreetReport = {
      streetTotalLen: 0,
      streetAvgLen: 0
  };     
      
    // Private Functions
    
    // Return Public Functions
    return {
        getNamesOfParks: function() {            
             return(Parks.name);
        },
        
        getNumberOfParks: function() {
            return(Parks.name.length);
        },
        
        getNumberOfTrees: function() {
            return(Parks.numbTrees);
        },
        
        getParkArea: function() {
            return(Parks.parkArea);
        },
        
        getYearsBuilt: function() {
            return(Parks.yearBuilt);    
        },
        
        getParkAges: function() {
            var totalParkAge = 0;
            now = new Date();   // Returns todays Date.
            year = now.getFullYear();
            for(var i in Parks.yearBuilt) {
                totalParkAge += (year - Parks.yearBuilt[i]);
            }
            return(totalParkAge)
        }
    }
    
})();  

var UIController = (function() {
                    
    var DOMStrings = {
        
        reportTitle: '.report__title',
        thisYear: '.this__Year',
        numbParks: '.number__parks',
        avgAge: '.average__age',
        parkName: '.name__Park',
        treePerSqKM: '.trees__squareKM',
        parksContainer: 'parks__container',        
        numberOfStreets: '.numberOfStreets',
        lengthOfStreet:  '.lengthOfStreet',
        averageLenStreet:  '.averageLengthOfStreets',
        streetName: '.streetName',
        yearBuilt: '.builtInYear',
        StreetSize: '.sizeOfStreet',
            
    };
      
    return {
        displayMonth: function() {
           var now, months, month, year;
           now = new Date();   // Returns todays Date.
           months = ['January', 'February', 'March',                       'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
           month = now.getMonth();
           document.querySelector(DOMStrings.thisYear).textContent = months[month] + ' ' + year;
        },
        
        displayParkAge: function() {
            var parkTotalAge, numberOfParks, averageAge;
            numberOfParks =  CityController.getNumberOfParks();
            parkTotalAge = CityController.getParkAges();
            averageAge = parkTotalAge / numberOfParks;
            document.querySelector(DOMStrings.numbParks).textContent = numberOfParks;
            document.querySelector(DOMStrings.avgAge).textContent = averageAge;        
          },
        
            
         displayParkNames: function(){
            namesOfParks =  CityController.getNamesOfParks();
            console.log("Names of Parks: " + namesOfParks);
            for (var x in namesOfParks) {
                console.log(namesOfParks[x]);
            } 
        },
        
        addParkItems: function() {
        element = DOMStrings.parksContainer;
        console.log(element);
        namesOfParks =  CityController.getNamesOfParks();
        numberOfTrees = CityController.getNumberOfTrees();
        parkAreas = CityController.getParkArea();
        yearsBuilt = CityController.getYearsBuilt();
        for (var x in namesOfParks) {
            var html, newHtml,parkName, numbTrees, parkArea;
            parkName = namesOfParks[x];
            numbTrees = numberOfTrees[x];
            parkArea = parkAreas[x];
            parkSqKM = numbTrees/parkArea
            console.log('n t a k = ' + parkName + numbTrees + parkArea + parkSqKM);
            html = "<div><span class='name__park'>%nameOfPark%</span> has a tree density of <span class='trees__squareKM'>%trees__squareKM%</span> trees per square KM.</div>"
            newHtml = html.replace('%nameOfPark%', parkName);
            newHtml = newHtml.replace('%trees__squareKM%', parkSqKM);
            console.log('newHtml = ' + newHtml);

           var element = document.getElementById(DOMStrings.parksContainer);
           console.log(element);
           document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
           }
        },
        
        
        
        getDOMStrings: function() {
           return DOMStrings;
       }   
    }
 })();   
    
// Controller
    
var Controller = (function() {
 
    
    // Control Functions
    
return {
    init: function() {
        console.log('Application has started.');
        // UIController.displayMonth();
        UIController.displayMonth();
        UIController.displayParkAge();
        UIController.displayParkNames();
        UIController.addParkItems();
        
//       DOM = UIController.getDOMStrings();
//      setupEventListeners(); 

    }
};
    
})(CityController, UIController);

Controller.init();

