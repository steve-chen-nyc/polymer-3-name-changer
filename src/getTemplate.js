export default function() {
    return `
        <style>
            h1 {
                color: #d2d2d2;
                font-family: arial;
            }
            .main-container {
                max-width: 960px;
                margin: 0 auto;
                text-align: center;
                position: relative;
                top: 250px;
            }

            button {
                -webkit-appearance: none;
                background-color: #d2d2d2;
                color: #fff;
                font-size: 14px;
                width: 100px;
                height: 50px;
            }

            input {
                width: 300px;
                height: 44px;
                padding-left: 20px;
                font-size: 14px;
                font-family: arial;
                color: #d2d2d2;
            }
        </style>

        <div class="main-container">
            <h1> Hello World!  <b>{{name}}</b>. </h1>
            <input></input><button> Click Me </button>
            <slot></slot>
        </div>
    `
}
