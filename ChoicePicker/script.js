const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
// Textarea'ya herhangi bir input girildiğinde onu algılatıyoruz.
textarea.addEventListener('keyup',(e)=> {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(()=>{
            e.target.value = ''
        },10)
    }
    randomSelect()

})
//daha sonra girilen inputtan aldığımız datayı mapleyip boşluk varsa onu kaldırdıktan sonra gerekli span etiketlerini oluşturup onlara "tag" class'ı ekliyoruz.
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag=>tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag=> {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

//ardından seçilen ve diğerlerini ayırmak için tanımladığımız iki fonksiyonumuzu burada kullanarak kullanıcıya gerçekten bir hesaplama yapılış hissiyatı yaratıyoruz.
function randomSelect () {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)
    },100);

    setTimeout(()=> {
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        },100)
    },times * 100)
}
//Girilen inputlardan birini rastgele seçtirebilmek için önce rastgele sayılar oluşturuyoruz ardından bu  sayıları randomTag'e gönderip bir tanesinin seçilmesini sağlıyoruz.
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// Burada seçilen ve seçilmeyenleri ayıran classları eklediğimiz fonksiyonlar bulunuyor.
function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}