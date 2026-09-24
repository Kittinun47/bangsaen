document.addEventListener("DOMContentLoaded", async function () {
    
    // ฟังก์ชันช่วยดึงไฟล์ HTML ย่อยมาใส่ในแท็กที่กำหนด
    async function loadComponent(placeholderId, filePath) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(placeholderId).innerHTML = html;
            } else {
                console.error(`ไม่สามารถโหลดไฟล์ ${filePath} ได้`);
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการโหลด:", error);
        }
    }

    // ทำการโหลดชิ้นส่วนทั้งหมดเข้ามาประกอบกัน
    await loadComponent("navbar-placeholder", "components/navbar.html");
    await loadComponent("carousel-placeholder", "components/carousel.html");
    await loadComponent("attractions-placeholder", "components/attractions.html");
    await loadComponent("contact-placeholder", "components/contact.html");
    await loadComponent("modal-placeholder", "components/modal.html");
    await loadComponent("footer-placeholder", "components/footer.html");

    // หลังจากโหลดส่วนติดต่อเสร็จแล้ว ค่อยผูกฟังก์ชันกดส่งฟอร์ม (Event Listener)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("ขอบคุณครับ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว");
            contactForm.reset();
        });
    }
});