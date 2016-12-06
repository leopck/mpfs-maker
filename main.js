var SPI_FLASH_SEC_SIZE = 4096;
var MFS_STARTFLASHSECTOR = 0x100;
var MFS_START = (MFS_STARTFLASHSECTOR*SPI_FLASH_SEC_SIZE);
var MFS_SECTOR = 256;
var MFS_FILENAMELEN = 32-8;
var ENTRIES = 8192;

function ENDIAN(x) {return x;}        //htonl (host-to-network-long) 

function arg_maker() {
//This function depends on what platform I'm making for. Later this will turn into a web browser. So the arguments and files(HTML, JS, CSS) will come in not via arguments but fetched from input boxes?

//For now arguments via node.js as prototype

console.log("Straing");
console.log("String 2");
var test = 4; 

if ( test != 4)
{
	console.log("Error: [tool] [directory to pack] [output packed .dat file]");
	return -1;

//Open folder
// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  console.log("File API works");  

} else {
  console.log("File API doesn't work!");
  alert('The File APIs are not fully supported in this browser.');
}
}



}

var mfsfat = { //MFSFileEntry
	name: [""],
	start: new Uint32Array(16),	
	len: new Uint32Array(16)
};

console.log(mfsfat);

console.log(ENDIAN(1+3));

var mfsdata = [""];
var fatpointer = 0;
var datapointer = 0;

var i;
var d_file_name;
var dir;

arg_maker();

