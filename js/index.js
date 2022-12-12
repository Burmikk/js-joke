alert ("😬Одна из жизненных историй для поднятия настроения😬")

const sallary = Number(prompt("Введи сумму ЗП в грн. 💵"))
const benefits =  sallary * 0.15
const total = sallary+benefits
alert (`В этом месяце я хорошо поработал и мне дали премию  ${benefits} грн. 🥳  Довольный собираюсь домой и иду в бухгалтерию забрать свои  ${total} грн. 💰`)

const taxes = total * 0.1
const totalAfterTax = total-taxes
alert(`А там с меня содрали налог в сумме  ${taxes}грн. и у меня осталось ${totalAfterTax} грн.💸`)

const party = 1500
const totalAfterParty = totalAfterTax - party
alert(`Попути домой зашел в бар 🍺 обмыть получку с друзьями и 🕺 прогулял 💃  ${party} грн. в итоге осталось ${totalAfterParty} грн. 📉`)

const totalAfterWife = totalAfterParty / 2
alert(`Еле дополз домой 😵‍💫 а там меня уже ждала жена со сковородкой 👧 пришлось отдать ей половину ЗП. Вот и все что у меня осталось  ${totalAfterWife} грн. 😢`)
alert(`Мораль сей басни такова: кто-то скажет не пить!🧃 кто-то скажет не жениться....`)
alert(`Но правильный вывод - БОЛЬШЕ ЗАРАБАТЫВАЙ!💵💰 К чему мы все и стремимся🤑`)
