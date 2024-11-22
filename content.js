console.log('This is a popup!');

// Function to wait for an element by selector
function waitForElement(selector, callback, interval = 100, timeout = 10000) {
    const startTime = Date.now();
    console.log("Waiting for element...");
    const intervalId = setInterval(() => {
        const element = document.querySelector(selector);

        if (element) {
            clearInterval(intervalId);
            callback(element); // Execute the callback once the element is found
        } else if (Date.now() - startTime > timeout) {
            clearInterval(intervalId);
            console.error("Timeout: Element not found:", selector);
        }
    }, interval);
}

// Wait for the element and allow user interaction
waitForElement('input[name="txtNumRecord_1"]', (targetElement) => {
    const value = targetElement.value.trim();
    if (value !== "") {
        alert(generateRoast(value));
        // Trigger the sound after the user input (e.g., after clicking the button or entering text)
    } else {
        alert("Kah le azmeha pniyot ya batata");
    }
});


// Improved sound playing function
function playRandomSound() {
    // Generate a random number between 1 and 7
    var x = Math.floor(Math.random() * 9) + 1;

    // Get the path to the sound file from the extension folder
    var soundPath = chrome.runtime.getURL('sounds/' + x + '.mp3');

    // Create a new Audio object with the sound file from the extension folder
    let sound = new Audio(soundPath);

    return sound;
}

document.addEventListener('click', playSound);

function playSound() {
    // Your sound logic goes here
    const audio = playRandomSound();
    audio.play().catch(error => {
        console.log('Error playing sound:', error);
    });
}



function generateRoast(num_pniyot) {
    const roasts = [
        `אתה לא מצליח לסיים ${num_pniyot} פניות, כי במקום לתקן מחשבים אתה פשוט מבצע 'דיבוג' עצמאי על החיים שלך.`,
        `אתה טכנאי מחשבים, אז במקום לסיים פניות אתה מחפש את התקלה בתוך עצמך – ולך תדע, אולי זה באמת שם.`,
        `אתה עובד בטכנאות מחשבים, אבל כשהעבודה מגיעה אליך, כל מה שאתה עושה זה לנקות את המסך ולחכות שיבוא 'ריפוי אוטומטי'.`,
        `הפניות האלה לא יסתיימו, כי אתה כנראה עסוק מדי בהורדת 'עדכונים' לחיים שלך במקום לעדכן את המערכת.`,
        `אם היית עובד על ${num_pniyot} פניות כמו שאתה עובד על מציאת סיבות למה המחשב לא נדלק, היינו כבר מסיימים.`,
        `אתה לא מצליח לסיים את הפניות? בטח אתה ממתין ל'הפעלה מחדש' שיפתור את כל הבעיות בעצמו.`,
        `טכנאי מחשבים שצריך לסיים ${num_pniyot} פניות אבל כל הזמן מחפש דרכים לגרום להן לעבוד מעצמן, בדיוק כמו כל תיקון שאתה עושה.`,
        `אתה לא מצליח לסיים ${num_pniyot} פניות כי כל פעם שאתה מנסה להקליד, הידיים שלך נתקעות בכיסים של החולצה.`,
        `אתה לא עוסק בפניות, אתה פשוט עסוק בניסיון למצוא את החטיף הבא שיביא אותך לאיזור הנוחות.`,
        `היית מסיים את ${num_pniyot} פניות אם היית מצליח לזכור מה עשית אתמול.`,
        `אתה לא עונה על הפניות, כי אתה כל הזמן נזכר במשהו חשוב מ-1965 ושוכח מה לעשות עכשיו.`,
        `תפסיקו לעשות פוזות, תעשו פניות! אף אחד לא מחפש את המועמד לתפקיד 'המשוגע של המשרד'.`,
        `העיניים שלך מלאות דמעות, אבל הפניות האלה פשוט לא יסתיימו, לא משנה כמה תבכה.`,
        `אם היית עובד על ${num_pniyot} פניות כמו שאתה מתחרה בגמדי הגינה מי יעמוד יותר זמן, היינו כבר מסיימים את כל העבודה.`,
        `אם היית עובד על ${num_pniyot} פניות כמו שאתה בוהה במקרר ומחפש השראה, היינו כבר מסיימים הכל.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה גולל באינסטגרם, כבר היינו בונים לך פסל על החריצות.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה מתלונן שאין זמן, היינו כבר מסיימים את השנה עם בונוס.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה מחפש את השלט של הטלוויזיה, היינו גומרים לפני שהפרסומות מתחילות.`,
  `אם היית משקיע ב${num_pniyot} פניות כמו שאתה משקיע בלבחור מה להזמין לצהריים, היינו כבר חותכים את התור.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה מקפיד לסדר את הקפה במשרד, כבר היינו מנהלים עסק גלובלי.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה מחפש דרכים לדחות אותן, היינו גומרים הכל מוקדם.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה טוען שהמחשב איטי, כבר היינו מעבירים אותך קורס על זריזות.`,
  `אם היית מסיים ${num_pniyot} פניות כמו שאתה מתחמק מעבודה, היינו ממנים אותך למנכ"ל התחמקות.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה מנסה להבין למה הטלפון לא זז, כבר היינו מדלגים על כל הבעיות.`,
  `אם היית עובד על ${num_pniyot} פניות כמו שאתה עובד על להיות חתיכת עצלן, כבר היינו מסיימים את זה שנה שעברה.`,
  `איך אתה לא מתבייש? ${num_pniyot} פניות מחכות לך, ואתה יושב כמו פסל, רק חסר שיזרקו עליך מטבעות.`,
  `אתה כזה איטי שאפילו Windows 95 נראה כמו טורנדו לידך. תתעורר כבר, יא שק תפוחי אדמה.`,
  `אם היית משתמש במוח שלך כמו שאתה משתמש בתירוצים שלך, היית כבר גאון הדור. אבל לא, אתה מעדיף להיות עולב.`,
  `כבר עדיף לנסות לדבר עם הקיר מאשר לבקש ממך לסיים ${num_pniyot} פניות. לפחות הקיר לא מתרץ.`,
  `אם הייתי רוצה לראות מישהו עובד כמוך, הייתי צופה באינטרנט של שנות ה-90: חורק, נתקע, ובסוף מת.`,
  `תגיד, מתי בפעם האחרונה עשית משהו חוץ מלהתלונן? ${num_pniyot} פניות לא יטפלו בעצמן, יא פרצוף חמוץ.`,
  `אתה כזה איטי שאפילו שליח של וולט בחל"ת עובר עליך בסיבוב.`,
  `אם היית מסיים ${num_pniyot} פניות במקום לחפש איך לברוח, אולי סוף סוף היינו מפסיקים להתפלל שיקרה נס.`,
  `כשאתה עובד, אני נשבע שצריך לשים לוחית אזהרה: 'תיזהרו, ייאוש בדרך.'`
      ];
      

    const randomIndex = Math.floor(Math.random() * roasts.length);
    return roasts[randomIndex];
}


// Override the original absoluteOver function
window.absoluteOver = function(obj, imgsrc, width, height, lyr) {
    var coors = getElementPosition(obj);
    
    var x = document.getElementById(lyr);
    if (!x) {
        x = document.createElement('div');
        x.id = lyr;
        document.body.appendChild(x);
    }
    
    // Set the image source dynamically
    let newImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s'; // New image URL
    x.style.position = 'absolute';
    x.innerHTML = '<img alt="" src="' + newImageUrl +
                  '" width="' + width + '" height="' + height +
                  '" onMouseOut="removeAbsoluteOver(\'' + lyr + '\');" >';
    x.style.top = coors[1] + 'px'; 
    x.style.left = coors[0] + 'px';
};

// Re-defining getElementPosition if needed
function getElementPosition(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft; curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return [curleft, curtop];
}

// Re-defining removeAbsoluteOver to remove the image layer
function removeAbsoluteOver(objname) { 
    var x = document.getElementById(objname); 
    if (x) x.innerHTML = ' '; 
}

// Your custom event listener for hover actions
document.body.addEventListener('mouseover', function(event) {
    if (event.target && event.target.tagName === 'SPAN') { // Modify for your target element
        let imageWidth = 200;
        let imageHeight = 250;
        let layerId = 'image-layer'; // Unique ID for the image layer
        
        // Trigger the image hover effect
        absoluteOver(event.target, getRandomImageUrl(), imageWidth, imageHeight, layerId);
    }
});


// List of image URLs
const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAs_TDUTeHiZQ1tqLJlvItaBOjcmRTeoSbHw&s",
    "https://listium-res.cloudinary.com/image/upload/w_400,h_400,c_limit,q_auto,f_auto/izwoj06lvaocokmjbzpg.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZm4MMN_wHo25D6V-kBr2MqOtVrG-zBXW_kg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREm0wkZvqyTrX9n9egxNUbUcXQ4UBgNL4bfg&s"
];

// Function to get a random image URL from the list
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

console.log('This is a popup2!');
