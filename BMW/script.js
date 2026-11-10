// ننتظر الصفحة تحمل بالكامل قبل لا يشتغل الكود
document.addEventListener('DOMContentLoaded', () => {
    
    // تحديث السنة في الفوتر بشكل ديناميكي
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // تفعيل السكرول الناعم لروابط الناف بار
    // نجيب كل الروابط اللي فيها #
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // نوقف الانتقال العادي
            
            // نجيب القسم المطلوب عن طريق الـ id
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // نسوي سكرول للقسم بحركة ناعمة
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});