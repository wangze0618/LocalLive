const request = (url,method,data)=>{
	return new Promise((resolve,reject)=>{
		wx.request({
			url:`https://www.escook.cn${url}`,
      method,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        reject(res);
      },
		})
	})
}

module.exports = request