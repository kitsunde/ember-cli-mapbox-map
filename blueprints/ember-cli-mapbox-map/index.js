module.exports = {
  afterInstall: function(){
    return this.addBowerPackageToProject('mapbox.js', "2.2.3");
  }
};
