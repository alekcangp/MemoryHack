var faceFiles = [];

var MpFS = {
  prepareResource : (function(dir){
    FS.createFolder(
        '/',
        '/temp',
        true,
        true
    );
    FS.createPreloadedFile(
        '/temp',
        'tempface.bin',
        MpConfig["documentPath"] + 'temp/tempface.bin',
        true,
        true
    );
  
    faceFiles.forEach(function (arg) {
      FS.createPreloadedFile(
        '/items/face',
        arg,
        MpConfig["documentPath"] + 'items/face/'+arg,
        true, 
        false 
      );
    });

       
    
  

  }),
};

