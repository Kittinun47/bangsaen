document.addEventListener("DOMContentLoaded", async function () {
    
    // ฟังก์ชันช่วยดึงคอมเพนเนนต์ Navbar และ Footer มาแสดงผลอัตโนมัติทุกหน้า
    async function loadComponent(placeholderId, filePath) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(placeholderId).innerHTML = html;
            }
        } catch (error) {
            console.error("Error loading component:", error);
        }
    }

    // เรียกใช้งานโหลด Navbar และ Footer (รองรับข้อกำหนดข้อ 7 เรื่อง Navbar ทำงานได้ทุกหน้า)
    await loadComponent("navbar-placeholder", "components/navbar.html");
    await loadComponent("footer-placeholder", "components/footer.html");

    // ระบบจัดการฟอร์มติดต่อ (หน้า Contact)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("ขอบคุณครับ! ข้อความของคุณถูกส่งเรียบร้อยแล้ว");
            contactForm.reset();
        });
    }
});