exports.response = (data, message) => {
  return {
    data: data,
    message: message,
  };
};

exports.mes = {
  INSERT_SUCCESSFULY: "Thêm mới thành công",
  INSERT_EXIST: "Đã tồn tại dữ liệu",
  VIEW_SUCCESSFULY: "Lấy dữ liệu thành công",

  REGISTER_SUCCESSFULY: "Tạo tài khoản thành công",
  REGISTER_FAIL: "Tạo tài khoản thất bại - Tài khoản này đã được sử dụng"
};
