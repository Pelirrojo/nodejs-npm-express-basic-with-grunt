module.exports = function (grunt) {
  grunt.initConfig({
    apidoc: {
      myapp: {
        src: 'src/',
        dest: 'apidoc/'
      }
    }

  })

  grunt.loadNpmTasks('grunt-apidoc')

  grunt.registerTask('build', ['apidoc'])
}
