module.exports = function makeTransloaditCrop({
  Transloadit,
  path,
}) {
  async function transloaditCrop({
      files,
  }) {
    const [file] = files;
    const transloadit = new Transloadit({
      authKey: '3747863d3db944fe8bff52544dc81504',
      authSecret: '46f6ec72ca374c2c1abe5212c41bf00028a0a4f0'
    });
    const options = {
      params: {
        steps: {
          ':original': {
            robot: '/upload/handle',
          },
          crop_thumbed: {
            use: ':original',
            robot: '/image/resize',
            result: true,
            height: 150,
            imagemagick_stack: 'v2.0.7',
            resize_strategy: 'fillcrop',
            width: 150,
            format: 'jpg',
          },
          exported: {
            use: ['crop_thumbed',':original'],
            robot: '/ftp/import',
            // credentials: 'YOUR_AWS_CREDENTIALS',
            // url_prefix: 'https://demos.transloadit.com/',
          },
        }
      }
    };
    // console.info(path.join(__dirname, '/fixtures/berkley.jpg'))
    const fileVal = path.join(__dirname, '/fixtures/berkley.jpg')
    transloadit.addFile ('files', fileVal);

    // Start the Assembly
    let res;
    const resized = await transloadit.createAssembly(options, async (err, result) => {
      if (err) {
        throw err
      }
      console.info({result})
      res = result;
      return { result }
    });
    return {resized, res};  
  }
  return transloaditCrop;
};
