
const insertDocuments = function(db, callback) {
	
	const collection = db.collection('Conn');
	
	
	collection.insertMany([
		{ id: 1, adi: 'Muhammed', soyadi: 'Acıbalık', yas: 23 },
		{ id: 2, adi: 'Ebru', soyadi: 'Özdemir', yas: 22 },
		{ id: 3, adi: 'Perihan', soyadi: 'Sayın', yas: 22 }
	], function(err, result) {
		if(err) throw err;
		
		console.log("3 KAYIT BAŞARILI BİR ŞEKİLDE EKLENDİ");
		
		callback(result);
	});
};
const updateDocument = function(db, callback) {
	
	const collection = db.collection('Conn');
	
	collection.updateOne({ id: 1 }, { $set: { yas: 24 }},
	function(err, result) {
		if(err) throw err;
		
		console.log("Güncelleme İşlemi Başarılı");
		
		callback(result);
	});
};

const MongoClient = require('mongodb').MongoClient; 


const mongoDbServer = 'mongodb+srv://ebruozdemir:Ebr11121314.@cluster0.r9ck4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const dbName = 'FirstProjectDB';


MongoClient.connect(mongoDbServer, function(err, client) {
    if(err) throw err;
    //const db = client.db(dbName);

    console.log("Bağlantı başarıyla kuruldu"); 

	// insertDocuments(db,function(){
	// 	updateDocument(db,function(){
	// 		client.close();
	// 	});
	// });
});
// module.export={
// 	insertDocuments:insertDocuments,
// 	updateDocument:updateDocument
	
// }
					