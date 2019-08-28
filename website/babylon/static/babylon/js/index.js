(function () {
    var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
    var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

    BABYLON.SceneLoader.Load("../static/babylon/3d/", "model.glb", engine, function (scene) {

        window.scene = scene;

        // Add a camera to the scene and attach it to the canvas
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 8, new BABYLON.Vector3(0, 0, 0), scene);
        // Prevent zooming by setting the lower and upper radius boundaries to the current radius.
        camera.lowerRadiusLimit = 4;
        camera.upperRadiusLimit = 8;

        camera.setPosition(new BABYLON.Vector3(-5.556027775071264, 2.9328191096773466, 1.5707382595727126));
        camera.attachControl(canvas, true);

        scene.activeCamera.alpha += .0001;

        var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(function () {
            scene.render();
        });

        // Watch for browser/canvas resize events
        window.addEventListener("resize", function () {
            engine.resize();
        });

        scene.onPointerObservable.add(function (evt) {

            console.log(evt.pickInfo.pickedMesh);

        }, BABYLON.PointerEventTypes.POINTERUP);

    });

})();
