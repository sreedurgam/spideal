var category = ["Apparel","Automotive","Baby","Beauty","Books","DVD","Electronics","GiftCards","Grocery","HealthPersonalCare","HomeGarden","Jewelry","KindleStore","Luggage","Music","MusicalInstruments","OfficeProducts","PCHardware","PetSupplies","Shoes","Software","SportingGoods","Toys","VideoGames","Watches"];
var sortvalues = [ 'relevancerank', 'salesrank', 'price', '-price', 'reviewrank', 'reviewrank_authority', 'date-desc-rank'];
var mapping = [{
"globalName":"Apparel",
"nativeName":"Apparel"
},
{
"globalName":"Automotive",
"nativeName":"Automotive"
},
{
"globalName":"Baby",
"nativeName":"Baby"
},
{
"globalName":"Beauty",
"nativeName":"Beauty"
},
{
"globalName":"Books",
"nativeName":"Books"
},
{
"globalName":"DVD",
"nativeName":"DVD"
},
{
"globalName":"Electronics",
"nativeName":"Electronics"
},
{
"globalName":"GiftCards",
"nativeName":"GiftCards"
},
{
"globalName":"Grocery",
"nativeName":"Grocery"
},
{
"globalName":"HealthPersonalCare",
"nativeName":"HealthPersonalCare"
},
{
"globalName":"HomeGarden",
"nativeName":"HomeGarden"
},
{
"globalName":"Jewelry",
"nativeName":"Jewelry"
},
{
"globalName":"KindleStore",
"nativeName":"KindleStore"
},
{
"globalName":"Luggage",
"nativeName":"Luggage"
},
{
"globalName":"Music",
"nativeName":"Music"
},
{
"globalName":"MusicalInstruments",
"nativeName":"MusicalInstruments"
},
{
"globalName":"OfficeProducts",
"nativeName":"OfficeProducts"
},
{
"globalName":"PCHardware",
"nativeName":"PCHardware"
},
{
"globalName":"PetSupplies",
"nativeName":"PetSupplies"
},
{
"globalName":"Shoes",
"nativeName":"Shoes"
},
{
"globalName":"Software",
"nativeName":"Software"
},
{
"globalName":"SportingGoods",
"nativeName":"SportingGoods"
},
{
"globalName":"Toys",
"nativeName":"Toys"
},
{
"globalName":"VideoGames",
"nativeName":"VideoGames"
},
{
"globalName":"Watches",
"nativeName":"Watches"
}

];

var products = [];

var client = amazon.createClient({
  awsId: "AKIAIFNJWZSUU3EKEXKQ",
  awsSecret: "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",
  awsTag: "spi00-21"
});

module.exports = function(app){

    app.get('/', function(req, res){    	
    	res.render('../views/index.ejs');
    });

	app.get('/amazon', function(req, res){
		console.log("I m in amazon view");
		res.render('../views/amazon.ejs');
	});

	app.post('/amazon', function(req, res){	
		var nativeName;		
		for (var i=0; i<mapping.length; i++){
			if (mapping[i].globalName == req.body.category){
				nativeName = mapping[i].nativeName;
			}
		}		
		client.itemSearch({
		  Keywords:req.body.keyword,
		  SearchIndex:nativeName,
		  Sort:'relevancerank',
		  Version:'2011-08-01',
		  responseGroup: 'ItemAttributes,Offers,Images'
		}).then(function(results){
			products = results;
			console.log(results);
			//console.log(products[0].OfferSummary.LowestNewPrice.Amount);
			//console.log(products[0].OfferSummary.LowestNewPrice.CurrencyCode);	
			//console.log(products[0].OfferSummary.LowestNewPrice.Amount);
			//console.log(products[0].OfferSummary.LowestNewPrice.CurrencyCode);	  
		  res.render('../views/amazonproducts.ejs', {products: products, result: JSON.stringify(results)});
		}).catch(function(err){
		  console.log(err);
		  res.send("No such match found");
		});
	});



}