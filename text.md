append phương thức được sử dụng để thêm một đối tượng vào một danh sách
FormData là một Web API interface, cung cấp cho ta một cách tiếp cận khác với việc xử lý form

Async - khai báo một hàm bất đồng bộ (async function someName(){...}).

Tự động biến đổi một hàm thông thường thành một Promise.
Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.

Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ()😉.

Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
Await chỉ có thể được sử dụng bên trong các function async.
