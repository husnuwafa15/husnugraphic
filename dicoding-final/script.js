// Menangani event load untuk setiap gambar
const images = document.querySelectorAll('.img-cont img');
const heights = [];

images.forEach(image => {
    image.addEventListener('load', () => {
        heights.push(image.clientHeight); // Mengambil tinggi gambar setelah dimuat
        if (heights.length === images.length) {
            setEqualHeight(heights);
        }
    });
});

// Fungsi untuk menetapkan tinggi yang sama untuk semua item flex
function setEqualHeight(heights) {
    const maxHeight = Math.max(...heights);
    images.forEach(image => {
        image.parentElement.style.height = maxHeight + 'px'; // Mengatur tinggi item flex
    });
}
