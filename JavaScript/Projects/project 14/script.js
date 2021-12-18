// const form = document.querySelector("form")
const amount = document.getElementById('amount');
const generate = document.getElementById("generate");
const textSection = document.querySelector('.text-section');

const dummyText = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature",

    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,',

    "fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",

    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish",

    "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",

    "dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",

    "Nullam justo risus, aliquam sit amet laoreet quis, accumsan sit amet enim. Donec imperdiet magna et diam vestibulum condimentum. Nullam sed libero pharetra neque tristique lacinia eu eu nibh. Nunc interdum gravida vestibulum. Ut luctus iaculis augue at porttitor. Sed in dolor quis velit rutrum tristique. Mauris gravida, orci in laoreet venenatis, mi lacus consectetur enim, sit amet placerat lacus quam eget lorem. Nullam et auctor magna. Proin aliquam quis dolor in mollis. Sed elementum maximus dignissim. Integer facilisis diam ut tortor semper, eget mattis lorem lacinia. Vestibulum sed lorem consectetur, maximus elit in, dignissim felis. In id molestie purus.",

    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget augue leo. Etiam tristique quis velit blandit tristique. Nunc sed augue urna. Aliquam pretium metus vitae felis pulvinar, ac consectetur metus vestibulum. Fusce metus lectus, dapibus non elementum nec, posuere id erat. Pellentesque fringilla sit amet justo eget faucibus. Nullam efficitur ipsum quis quam luctus sollicitudin. Sed sed faucibus mauris."


];

generate.onclick = (e) => {
    e.preventDefault();

    const paragraphAmount = parseInt(amount.value);
    let randomNumber = Math.floor(Math.random() * dummyText.length);
    let TempArray = [];
    if (isNaN(paragraphAmount) || paragraphAmount < 1 || paragraphAmount > 9) {
        textSection.innerHTML = `<p>${dummyText[randomNumber]}</p>`;
    } else {
        // let tempArray = dummyText.slice(0, paragraphAmount);
        // tempArray = tempArray.map((item) => {
        //     return `<p>${item}</p>`;
        // }).join('');
        // textSection.innerHTML = `<p>${tempArray}</p>`;
        for (let index = 0; index < paragraphAmount; index++) {
            // rendnum = Math.floor(Math.random() * dummyText.length);
            // dummyText[rendnum] = `<p>${dummyText[rendnum]}</p>`
            // TempArray.push(dummyText[rendnum]);
            if (randomNumber < dummyText.length) {
                dummyText[randomNumber] = `<p>${dummyText[randomNumber]}</p>`
                TempArray.push(dummyText[randomNumber]);
                randomNumber++;
            } else {
                randomNumber = 0;
                dummyText[randomNumber] = `<p>${dummyText[randomNumber]}</p>`
                TempArray.push(dummyText[randomNumber]);
                randomNumber++;
            }
        }
        textSection.innerHTML = TempArray.join('');
    }


}