@Chromium
Feature: Browse รูปจากเครื่องได้

Scenario: Browse รูปจากเครื่อง
	Given เปิดหน้าเว็บ 'https://the-internet.herokuapp.com/upload'
	And กดปุ่มเลือกรูปภาพ
	When browse รูปจากโฟลเดอร์ 'C:\Users\sakul\Desktop\Pic for Demo\Cover1.jpg'
	And กดปุ่ม upload
	Then แสดงรูปภาพที่อัพโหลดบนเว็บ
