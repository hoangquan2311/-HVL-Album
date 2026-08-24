# SKILL: Xây dựng Web Player nghe 1 Album nhạc (local, offline-first)

## Mục tiêu
Xây một trang web tĩnh (HTML/CSS/JS thuần, không cần backend) để nghe **một album cố định gồm 30 bài hát** đã có sẵn dưới dạng file âm thanh local. Trang chỉ phục vụ 1 mục đích: nghe trọn album, đúng thứ tự, có điều khiển phát nhạc cơ bản.

## Phạm vi áp dụng
Dùng skill này khi:
- Người dùng đã có sẵn các file âm thanh (mp3/m4a/flac...) của một album.
- Người dùng muốn 1 trang web đơn giản, chạy được ngay trên máy (mở bằng trình duyệt hoặc host tĩnh) để nghe album đó theo playlist cố định.
- Không cần tài khoản, không cần database, không cần streaming từ server ngoài.

## Yêu cầu chức năng bắt buộc

1. **Playlist cố định đúng thứ tự** — danh sách 30 bài hiển thị theo đúng số thứ tự album gốc, có tên bài + (tuỳ chọn) nghệ sĩ hợp tác (ft.).
2. **Phát từng bài** — click vào 1 bài trong danh sách → phát bài đó, có nút Play/Pause.
3. **Next / Previous** — chuyển bài kế tiếp/trước đó theo thứ tự playlist hiện tại (thứ tự gốc hoặc thứ tự đã xáo trộn nếu đang bật random).
4. **Repeat** — 3 chế độ luân phiên khi bấm nút:
   - Không lặp (phát hết playlist rồi dừng)
   - Lặp toàn bộ album (hết bài 30 quay lại bài 1)
   - Lặp 1 bài (repeat one)
5. **Random/Shuffle** — bật/tắt xáo trộn thứ tự phát; khi tắt, quay lại đúng thứ tự gốc.
6. **Thanh tiến trình (seek bar)** — hiển thị thời gian đã phát / tổng thời lượng, kéo để tua.
7. **Hiển thị bài đang phát** — highlight bài hiện tại trong danh sách, tự cuộn tới nếu danh sách dài.
8. **Tự động chuyển bài kế tiếp** khi bài hiện tại phát xong (trừ khi đang repeat one).

## Yêu cầu kỹ thuật

- Dùng thẻ `<audio>` HTML5 gốc, điều khiển bằng JavaScript thuần (không bắt buộc framework — nếu người dùng không yêu cầu React/Vue thì ưu tiên HTML/CSS/JS đơn giản để dễ mở trực tiếp bằng file hoặc host tĩnh).
- Cấu trúc thư mục đề xuất:
  ```
  /album-player/
    index.html
    style.css
    script.js
    /audio/
      01-elegie.mp3
      02-idk.mp3
      ...
      30-thit-lon.mp3
  ```
- Danh sách playlist khai báo dưới dạng mảng JS (title, file path, thứ tự), KHÔNG hard-code logic phát nhạc theo tên bài — để dễ đổi tên file sau này.
- Responsive cơ bản (dùng được trên điện thoại lẫn desktop).
- Không cần build tool (không Webpack/Vite) trừ khi được yêu cầu — mục tiêu là mở file `index.html` là chạy được ngay, hoặc deploy tĩnh (GitHub Pages, Netlify...).
- Tên file audio nên đặt theo quy ước `NN-ten-bai-khong-dau.mp3` để dễ sort đúng thứ tự bằng tên file, nhưng thứ tự hiển thị/phát vẫn nên lấy từ mảng playlist trong code, không phụ thuộc filesystem sort.

## Lưu ý cho agent khi triển khai
- Không tự bịa thêm tính năng ngoài yêu cầu (không cần lyrics, không cần visualizer, không cần tài khoản) trừ khi người dùng bổ sung.
- Giữ UI tối giản: danh sách bài + thanh điều khiển phát nhạc (play/pause, prev/next, repeat, shuffle, seek bar, volume).
- Đảm bảo phím tắt bàn phím (space = play/pause) là điểm cộng nhưng không bắt buộc.
- Nếu người dùng chưa cung cấp file audio thật, dùng đúng tên file placeholder khớp với mảng playlist để họ tự thay file vào sau.
