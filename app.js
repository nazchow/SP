// calender , add events
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Bloomburrow Pre-release 6pm',
                start: '2024-07-26'
            },
            {
                title: 'Bloomburrow Pre-release 5pm',
                start: '2024-07-27',
            },
            {
                title: 'Lorcana Trading Cards',
                start: '2024-07-22',
            },
        ]
    });

    calendar.render();
});

        // init Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(300, 300);
        document.getElementById('boba-cup-container').appendChild(renderer.domElement);

        // light to the scene
        const light = new THREE.AmbientLight(0x404040);
        scene.add(light);

        // Load GLTF model
        const loader = new THREE.GLTFLoader();
        loader.load('assets/boba_tea_cup/scene.gltf', function (gltf) {
            scene.add(gltf.scene);
            gltf.scene.position.set(0, -1, 0);
            animate();
        }, undefined, function (error) {
            console.error(error);
        });

        camera.position.z = 3;
        // :( :(  :(  :( 
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
