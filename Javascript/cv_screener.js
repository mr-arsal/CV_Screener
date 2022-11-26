
let data = [
    {
        name: 'Arslan Nadeem',
        age: 20,
        language: 'Javascript',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Nouman Nadeem',
        age: 22,
        language: 'Python',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Sohail Askari',
        age: 21,
        language: 'Php',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        name: 'Zain Hassan',
        age: 24,
        language: 'Php',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    },
    {
        name: 'Faizan Shahid',
        age: 19,
        language: 'Node.js',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    }
]

// CV Iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    }
}

let candidate = cvIterator(data)
nextCV();

// Button listner on Next button

let next = document.getElementById('next');
next.addEventListener('click', nextCV)

function nextCV() {
    let currentCandidate = candidate.next().value
    if (currentCandidate != undefined) {
        let image = document.getElementById('image')
        let profile = document.getElementById('profile')
        image.innerHTML = `<img src="${currentCandidate.image}">`
        profile.innerHTML = `<ul class="list-group list-group-flush">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
  </ul>`
    }
    else {
        alert('No more applications');
        window.location.reload()
    }
}