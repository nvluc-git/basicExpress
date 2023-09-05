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
  REGISTER_FAIL_EXIST: "Tạo tài khoản thất bại - Tài khoản này đã được sử dụng",
  REGISTER_FAIL_ROLE: "Tạo tài khoản thất bại - không tồn tại bất kì dữ liệu quyền hạn nào",

  LOGIN_FAIL: "Không tìm thấy tài khoản",
  LOGIN_SUCCESSFULY: "Đăng nhập thành công"
};
