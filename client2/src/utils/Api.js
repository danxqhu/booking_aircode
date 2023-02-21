var URL = 'https://yth2veim6m.hk.aircode.run';

const Api = {
  getUsers: URL + '/getusers', //获取用户列表
  getHotels: URL + '/gethotels', //获取Hotel列表
  getRooms: URL + '/getrooms', //获取Room列表
  deleteUser: URL + '/deleteuser', //删除用户
  deleteHotel: URL + '/deletehotel', //删除Hotel
  deleteRoom: URL + '/deleteroom', //删除Hotel
  getcities: URL + '/cities', //删除Hotel
  countByType: URL + '/countByType', //删除Hotel
  getfeaturedhotels: URL + '/getfeaturedhotels', //删除Hotel
  searchhotelsbycity: URL + '/searchhotelsbycity', //删除Hotel
  searchhotelsbyid: URL + '/searchhotelsbyid', //删除Hotel
  bookinglogin: URL + '/bookinglogin', //删除Hotel
};

export default Api;
