
function loadInitialTable() {

	var mTable = $('#rsTable').DataTable( {
      	"ajax": {
            "url":      "http://jsonplaceholder.typicode.com/posts",				
		 	"dataType": "json",
      		"contentType": "application/json; charset=utf-8",
      		"dataSrc":  ""
 		},	
				 		 
        "columns": [
            { "data": "userId", "width": "10%", },
            { "data": "id",     "width": "10%" },
            { "data": "title",  "width": "25%" },
            { "data": "body",   "width": "55%" }
        ],
		
		"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
			var color = ((iDisplayIndex % 2) == 0) ? '#FFFFE6' : '#E6E6E6';                      
        	$('td', nRow).css('background-color', color);  
		}	
	});

}
