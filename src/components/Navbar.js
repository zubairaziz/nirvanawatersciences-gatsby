import React, { useContext } from 'react'
import { NavigationContext } from './Layout'
import { Link } from 'gatsby'

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useContext(NavigationContext)
  const handleButtonPress = (e) => {
    e.preventDefault()
    setNavIsOpen(() => (navIsOpen ? false : true))
  }
  return (
    <header className="relative top-0 w-full pt-8 header-nav">
      <div className="container">
        <nav className="flex items-center justify-between w-full">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 281 61"
              fill="none"
              className="w-36 md:w-72"
            >
              <defs />
              <mask id="a" width="29" height="37" x="0" y="0" maskUnits="userSpaceOnUse">
                <path fill="#fff" fillRule="evenodd" d="M0 .743h28.053V36.19H0V.743z" clipRule="evenodd" />
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#01ADED"
                  fillRule="evenodd"
                  d="M24.476 28.646v-1.103c0-8.136-.002-16.272.002-24.408.001-1.424.368-1.851 1.583-1.91 1.52-.075 1.987.367 1.987 1.896.001 10.333 0 20.666.004 31 0 .805.064 1.645-.92 1.96-.985.317-1.692-.077-2.322-.873C18.073 26.703 11.518 18.06 4.906 9.46c-.391-.508-.791-1.01-1.353-1.726-.03.602-.061.956-.062 1.31-.003 8.273 0 16.546-.003 24.819 0 1.46-.482 1.915-1.934 1.855-1.118-.045-1.54-.462-1.546-1.603-.013-2.369-.004-4.738-.004-7.106 0-8.102.003-16.203-.003-24.305 0-.775-.053-1.567.914-1.84.928-.262 1.637-.131 2.317.753 6.761 8.79 13.577 17.538 20.38 26.297.206.267.424.524.637.785l.227-.052z"
                  clipRule="evenodd"
                />
              </g>
              <path
                fill="#02ADED"
                fillRule="evenodd"
                d="M226.353 28.025v-1.36c0-7.918-.001-15.836.002-23.754 0-1.467.43-1.879 1.901-1.857 1.259.018 1.642.396 1.643 1.65.002 10.223-.003 20.446.01 30.67.001.723-.074 1.377-.902 1.599-.818.22-1.536.099-2.119-.633-2.999-3.763-6.05-7.488-9.047-11.253-3.968-4.984-7.902-9.992-11.853-14.99-.162-.205-.343-.397-.685-.792v25.518c0 1.396-.382 1.795-1.707 1.795-1.325 0-1.78-.434-1.781-1.775-.005-10.156-.001-20.313-.006-30.469-.001-.746.086-1.446.971-1.674.87-.225 1.58-.176 2.248.666 6.836 8.633 13.725 17.229 20.6 25.833.166.207.351.4.725.826z"
                clipRule="evenodd"
              />
              <path
                fill="#03ADED"
                fillRule="evenodd"
                d="M71.534 17.818V2.633c0-1.704.287-2.016 1.953-1.997C77.61.682 81.737.43 85.85.749c5.014.389 8.962 4.108 9.804 9.042.794 4.648-1.81 9.41-6.356 11.416-.918.405-.877.7-.444 1.445 1.938 3.341 3.823 6.713 5.719 10.08.846 1.502.4 2.193-1.302 2.287-1.233.067-1.936-.391-2.518-1.473-2.136-3.974-4.365-7.899-6.558-11.842-1.15-2.065-.892-2.575 1.45-2.873 4.451-.566 7.463-5.089 6.23-9.354-.822-2.84-3.558-5.106-6.588-5.227-3.156-.125-6.32-.052-9.48-.105-.714-.012-.648.396-.648.854-.006 3.249-.025 6.498-.028 9.746-.005 6.088 0 12.176-.002 18.264 0 1.653-.917 2.36-2.538 1.948-.916-.233-1.066-.924-1.064-1.748.014-4.583.007-9.166.007-13.75v-1.64zM168.011 6.592c-1.635 3.648-3.229 7.201-4.819 10.756-2.428 5.427-4.853 10.856-7.279 16.285-.552 1.238-2.122 1.803-3.343 1.19-.807-.407-.607-1.04-.336-1.647.892-1.994 1.801-3.981 2.707-5.97 3.844-8.439 7.692-16.876 11.53-25.318.305-.672.625-1.27 1.509-1.302.946-.033 1.294.585 1.614 1.296 2.81 6.25 5.634 12.496 8.45 18.745 1.822 4.042 3.641 8.086 5.453 12.133.322.72.879 1.52-.213 2.07-.999.505-2.58.101-3.04-.713-.182-.322-.321-.666-.47-1.004l-11.41-25.808c-.091-.208-.201-.407-.353-.713z"
                clipRule="evenodd"
              />
              <mask id="b" width="32" height="36" x="249" y="0" maskUnits="userSpaceOnUse">
                <path fill="#fff" fillRule="evenodd" d="M249.229.656h31.637v34.398h-31.637V.656z" clipRule="evenodd" />
              </mask>
              <g mask="url(#b)">
                <path
                  fill="#03ADED"
                  fillRule="evenodd"
                  d="M265.14 6.622c-1.993 4.466-3.918 8.773-5.836 13.082-2.081 4.678-4.154 9.36-6.237 14.037-.503 1.128-2.178 1.665-3.293 1.064-.717-.386-.609-.971-.343-1.563.946-2.106 1.901-4.207 2.854-6.31 3.714-8.202 7.429-16.404 11.146-24.604.166-.365.313-.75.545-1.073.694-.965 2.036-.73 2.579.465 1.593 3.505 3.165 7.018 4.74 10.53 3.056 6.809 6.108 13.619 9.162 20.429.595 1.327.549 1.845-.193 2.162-1.156.493-2.657.067-3.103-.932-1.592-3.577-3.161-7.164-4.739-10.747l-7.282-16.54z"
                  clipRule="evenodd"
                />
              </g>
              <path
                fill="#303393"
                fillRule="evenodd"
                d="M125.784 30.182l10.338-22.877c.654-1.448 1.298-2.9 1.967-4.342.452-.973 2.471-1.416 3.306-.725.604.5.375 1.085.112 1.66-2.087 4.55-4.17 9.1-6.258 13.65-2.665 5.808-5.333 11.614-8.001 17.421-.197.428-.351.881-.803 1.148-.859.508-1.68.178-2.196-.955-1.472-3.23-2.92-6.471-4.377-9.707l-9.62-21.364c-.32-.71-.818-1.479.209-2.004 1.039-.531 2.661-.066 3.065.83 1.364 3.019 2.712 6.045 4.063 9.07 2.591 5.803 5.178 11.607 7.77 17.41.094.211.22.408.425.785z"
                clipRule="evenodd"
              />
              <path
                fill="#00ACED"
                fillRule="evenodd"
                d="M48.538 17.689V2.46c0-1.465.283-1.88 1.262-1.876 1.01.004 1.289.386 1.29 1.843.002 10.289.002 20.578 0 30.867 0 1.338-.32 1.771-1.269 1.776-.963.006-1.28-.414-1.282-1.743-.004-5.213-.001-10.426-.001-15.64z"
                clipRule="evenodd"
              />
              <path
                fill="#09AFEE"
                fillRule="evenodd"
                d="M23.325 57.548c.92-1.822 1.728-3.476 2.595-5.101.214-.402.22-1.098.932-1.045.646.048.69.686.91 1.11.836 1.61 1.639 3.234 2.548 5.038l2.58-5.756c.096-.215.172-.44.282-.649.194-.372.309-.924.927-.69.64.241.332.719.16 1.1-1.085 2.39-2.184 4.776-3.282 7.161-.14.303-.255.638-.708.623-.405-.013-.49-.337-.62-.595-.82-1.624-1.622-3.256-2.437-4.882-.103-.205-.244-.393-.431-.692-.941 1.853-1.838 3.615-2.731 5.38-.18.353-.266.811-.811.778-.477-.03-.555-.454-.703-.78a1754.91 1754.91 0 01-3.132-6.894c-.176-.389-.488-.865.077-1.134.642-.306.808.261 1 .69l2.844 6.338z"
                clipRule="evenodd"
              />
              <path
                fill="#3B3E98"
                fillRule="evenodd"
                d="M127.577 52.447l-.001 5.968c0 .403.08.902-.535.924-.611.022-.592-.454-.592-.876.003-2.377-.001-4.755.004-7.133.001-.362-.079-.793.448-.91.459-.103.711.194.954.506a2039.72 2039.72 0 004.277 5.464c.208.264.435.514.808.954v-3.058-3.057c-.001-.385-.016-.792.544-.816.636-.027.627.423.627.843.002 2.343.004 4.687-.002 7.031-.001.363.066.778-.424.941-.546.182-.852-.125-1.146-.505-1.373-1.774-2.757-3.54-4.141-5.306-.206-.264-.433-.513-.821-.97z"
                clipRule="evenodd"
              />
              <mask id="c" width="8" height="10" x="161" y="50" maskUnits="userSpaceOnUse">
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M161.061 50.446h7.534v8.894h-7.534v-8.894z"
                  clipRule="evenodd"
                />
              </mask>
              <g mask="url(#c)">
                <path
                  fill="#363996"
                  fillRule="evenodd"
                  d="M164.973 59.336c-1.118-.004-1.983-.177-2.781-.643-.456-.266-.807-.627-1.025-1.132-.132-.305-.188-.603.115-.785.305-.183.56-.108.8.238.97 1.397 3.515 1.765 4.862.741.418-.317.662-.719.568-1.27-.099-.579-.548-.826-1.019-.907-1.033-.18-2.083-.253-3.119-.416-1.468-.232-2.119-.82-2.191-1.904-.081-1.224.528-2.052 1.858-2.513 1.221-.424 2.444-.387 3.65.043.649.23 1.177.645 1.478 1.32.116.26.189.499-.097.69-.287.193-.51.128-.75-.13-1.075-1.159-2.793-1.51-4.153-.848-.536.262-1.022.625-.933 1.34.081.657.562.926 1.139 1.007.975.136 1.953.244 2.93.37 1.458.19 2.185.81 2.281 1.94.096 1.138-.607 2.117-1.857 2.557-.637.224-1.296.327-1.756.302z"
                  clipRule="evenodd"
                />
              </g>
              <path
                fill="#363996"
                fillRule="evenodd"
                d="M90.753 59.335c-1.075.006-1.99-.178-2.823-.678-.488-.292-.87-.697-1.033-1.267-.076-.266-.076-.554.243-.664.252-.087.487-.07.696.178 1.193 1.414 2.802 1.82 4.481 1.137.642-.26 1.172-.677 1.106-1.456-.065-.774-.69-.988-1.326-1.079-1.026-.147-2.063-.225-3.085-.392-1.308-.213-1.974-.847-2.077-1.877-.105-1.037.498-1.968 1.643-2.433 1.385-.564 2.793-.52 4.177.012.323.124.655.339.876.605.305.369.909.816.358 1.327-.52.48-.737-.192-1.024-.51-.907-1.008-3.681-1.017-4.604-.024-.54.58-.423 1.358.283 1.74.466.252.988.305 1.505.357.677.067 1.356.122 2.031.207 1.472.184 2.208.772 2.322 1.831.137 1.268-.572 2.273-1.95 2.71-.62.197-1.262.306-1.8.276z"
                clipRule="evenodd"
              />
              <path
                fill="#0EB1EE"
                fillRule="evenodd"
                d="M70.073 53.245c0 .477.002.955-.001 1.432-.003.299.044.56.442.544 1.123-.041 2.253.123 3.37-.114.922-.195 1.55-.682 1.59-1.642.04-.935-.517-1.525-1.37-1.866-.669-.268-1.382-.21-2.085-.21-1.948.003-1.948.001-1.947 1.856zm4.213 2.963c.642.682 1.28 1.362 1.922 2.037.28.294.547.604.132.956-.374.318-.656.024-.899-.226a190.728 190.728 0 01-2.157-2.26c-.24-.252-.456-.503-.842-.571-2.012-.357-2.363-.084-2.368 1.875v.308c0 .412.06.908-.54.933-.64.027-.554-.489-.555-.891-.004-1.369-.002-2.737-.002-4.106 0-1.027.013-2.053-.004-3.08-.008-.491.142-.79.71-.781 1.307.02 2.62-.049 3.919.061 1.706.145 2.76 1.082 2.984 2.45.24 1.472-.365 2.38-2.077 3.124-.062.027-.11.083-.224.17z"
                clipRule="evenodd"
              />
              <path
                fill="#393C97"
                fillRule="evenodd"
                d="M116.239 54.873c0-1.146.014-2.291-.005-3.436-.011-.676.198-1.046.869-1.038 1.61.018 3.221.005 4.831.006.33 0 .692.023.671.503-.021.47-.383.462-.713.461-1.326-.005-2.653.025-3.978-.015-.533-.016-.686.15-.693.748-.03 2.34-.052 2.34 2.076 2.34l2.463.001c.303 0 .597.037.586.478-.011.445-.32.448-.613.449-1.263.002-2.527.021-3.789-.009-.491-.011-.712.079-.725.715-.043 2.252-.069 2.251 1.982 2.251h2.747c.339 0 .675.062.671.523-.005.487-.37.482-.694.482-1.61 0-3.221-.016-4.831.008-.678.01-.874-.355-.861-1.031.022-1.145.006-2.291.006-3.436z"
                clipRule="evenodd"
              />
              <path
                fill="#3B3E98"
                fillRule="evenodd"
                d="M149.454 54.809c-.001-1.11.028-2.222-.011-3.33-.025-.742.194-1.092.911-1.08 1.582.028 3.165.007 4.748.01.315 0 .69-.041.7.465.013.596-.414.496-.751.498-1.329.004-2.659.024-3.988-.01-.493-.012-.635.145-.65.696-.065 2.388-.084 2.387 2.054 2.387.697 0 1.394-.022 2.089.009.371.017.964-.227.99.442.029.724-.585.46-.941.47-1.171.031-2.343.028-3.514.004-.457-.009-.658.092-.68.675-.087 2.286-.11 2.285 1.965 2.285h2.754c.329 0 .673.009.696.488.026.5-.318.52-.651.52-1.646 0-3.293-.005-4.939.002-.556.002-.799-.268-.788-.888.02-1.214.006-2.429.006-3.643z"
                clipRule="evenodd"
              />
              <path
                fill="#16B3EE"
                fillRule="evenodd"
                d="M60.035 54.821c0-1.108.009-2.215-.004-3.323-.007-.708.222-1.108.93-1.1 1.57.021 3.14.005 4.711.01.312.001.697-.031.72.45.026.567-.391.523-.737.524-1.256.003-2.513.027-3.769-.01-.57-.018-.821.097-.82.829.003 2.228-.03 2.228 2.013 2.228.785 0 1.57-.002 2.356.001.315.001.7-.033.717.446.02.563-.406.512-.75.513-1.193.004-2.388.032-3.58-.011-.58-.021-.743.19-.752.823-.03 2.106-.053 2.106 1.833 2.106.943 0 1.885-.003 2.827.003.324.002.668.033.687.507.02.498-.334.52-.656.52-1.634.005-3.267-.005-4.9.003-.62.002-.825-.38-.825-.988V54.82z"
                clipRule="evenodd"
              />
              <path
                fill="#0EB1EE"
                fillRule="evenodd"
                d="M190.175 54.714c-.008 2.126 1.329 3.586 3.306 3.612 1.967.026 3.396-1.456 3.406-3.53.009-1.978-1.416-3.403-3.406-3.406-2.007-.003-3.298 1.295-3.306 3.324zm3.293-4.315c2.615.007 4.509 1.842 4.51 4.369.001 2.607-1.916 4.574-4.456 4.572-2.648-.003-4.505-1.919-4.485-4.627.019-2.516 1.873-4.321 4.431-4.314z"
                clipRule="evenodd"
              />
              <path
                fill="#03ADED"
                fillRule="evenodd"
                d="M202.903 53.295c0 .48.006.96-.002 1.44-.006.335.129.52.496.502 1.125-.054 2.257.127 3.377-.123.887-.198 1.495-.686 1.555-1.582.061-.92-.471-1.55-1.323-1.915-.668-.285-1.382-.233-2.088-.232-2.018.003-2.018.001-2.015 1.91zm4.171 2.897c.685.722 1.316 1.366 1.92 2.033.237.262.665.539.223.943-.41.376-.704.057-.974-.225-.744-.78-1.477-1.568-2.224-2.344-.381-.396-2.431-.685-2.89-.43-.274.153-.216.407-.22.637-.01.618-.012 1.235-.009 1.852.002.366-.159.615-.545.613-.383-.003-.547-.245-.546-.615.004-2.538.002-5.077.003-7.615 0-.51.341-.625.775-.626 1.166-.001 2.334-.042 3.498.01 1.791.081 3.003.983 3.306 2.373.326 1.5-.301 2.444-2.317 3.394z"
                clipRule="evenodd"
              />
              <path
                fill="#16B3EE"
                fillRule="evenodd"
                d="M216.27 55.697c.658-.017 1.317.04 1.965-.168 1.306-.419 1.887-1.508 1.401-2.687-.519-1.256-2.51-1.968-4.643-1.416-1.006.26-.257 1.289-.446 1.944-.065.223-.01.476-.01.716 0 1.61 0 1.61 1.733 1.611zm-2.963-.78c-.001-1.2.001-2.399-.002-3.598-.002-.62.257-.946.992-.919 1.029.038 2.063-.017 3.093.016 2.121.068 3.569 1.373 3.578 3.184.009 1.792-1.355 2.976-3.532 3.063-.147.006-.294 0-.442.002-.735.012-1.61-.201-2.17.096-.666.353-.189 1.244-.278 1.893-.054.39-.188.693-.639.685-.467-.007-.594-.35-.596-.723-.007-1.233-.003-2.466-.004-3.7z"
                clipRule="evenodd"
              />
              <path
                fill="#09AFEE"
                fillRule="evenodd"
                d="M42.222 56.032l-2.007-4.114-2.005 4.114h4.012zm2.483 2.742c-.01.232-.1.365-.253.448-.223.12-.465.132-.638-.055a1.477 1.477 0 01-.352-.593c-.374-1.416-1.282-1.861-2.63-1.613-.35.064-.73.066-1.079 0-1.471-.282-2.429.248-2.862 1.751-.11.382-.327.814-.847.542-.461-.24-.25-.628-.089-.956 1.195-2.424 2.387-4.85 3.602-7.264.405-.805.88-.85 1.256-.108 1.27 2.497 2.505 5.014 3.751 7.524.059.118.105.243.14.324z"
                clipRule="evenodd"
              />
              <path
                fill="#3B3E98"
                fillRule="evenodd"
                d="M140.253 55.222c.016 1.03.627 2.187 1.952 2.826 1.317.635 2.504.275 3.539-.718.289-.277.562-.676.955-.27.461.479-.042.795-.305 1.074-1.261 1.341-3.495 1.594-5.076.605-1.704-1.068-2.504-3.326-1.89-5.343a4.192 4.192 0 014.316-2.988c.995.067 1.878.402 2.628 1.098.253.235.498.504.219.848-.267.33-.564.195-.831-.067-.785-.77-1.73-.96-2.767-.828-1.709.218-2.733 1.44-2.74 3.763z"
                clipRule="evenodd"
              />
              <path
                fill="#0EB1EE"
                fillRule="evenodd"
                d="M181.867 59.34c-1.946-.012-3.619-1.348-4.137-3.197-.55-1.964.124-3.97 1.691-5.034 1.533-1.04 3.799-.928 5.128.273.273.247.727.53.35.974-.351.411-.669.052-.982-.204-1.381-1.132-3.531-.955-4.629.362-1.079 1.294-.942 3.606.287 4.858 1.268 1.291 3.126 1.277 4.504-.063.295-.286.56-.659.951-.264.411.416.001.75-.25 1.013-.835.872-1.889 1.223-2.913 1.282z"
                clipRule="evenodd"
              />
              <path
                fill="#393C97"
                fillRule="evenodd"
                d="M102.686 59.34c-1.914.014-3.559-1.27-4.125-3.149-.585-1.939.072-3.99 1.62-5.055 1.535-1.056 3.785-.97 5.144.21.285.246.738.532.416.97-.374.508-.71.066-1.039-.203-1.319-1.081-3.483-.91-4.574.346-1.106 1.272-1.007 3.576.206 4.859 1.255 1.326 3.121 1.355 4.509.052.31-.29.608-.771 1.02-.293.396.458-.083.804-.366 1.079-.811.785-1.812 1.115-2.811 1.184z"
                clipRule="evenodd"
              />
              <path
                fill="#0EB1EE"
                fillRule="evenodd"
                d="M51.108 50.4c1.037 0 2.074-.002 3.11 0 .34 0 .692.041.705.502.013.479-.34.504-.684.504-.648-.002-1.299.041-1.943-.012-.619-.051-.765.208-.75.818.046 2.014.046 4.028.057 6.042.002.303.061.626-.14.889a.459.459 0 01-.524.173c-.362-.11-.367-.419-.367-.738.003-1.98-.069-3.965.029-5.94.054-1.09-.304-1.372-1.24-1.244-.479.066-.972.014-1.458.01-.3-.004-.614-.017-.641-.442-.03-.475.283-.56.638-.56 1.069-.004 2.138-.002 3.208-.002z"
                clipRule="evenodd"
              />
              <path
                fill="#303393"
                fillRule="evenodd"
                d="M109.846 54.788c0-1.23-.002-2.459.002-3.688.001-.338-.022-.702.587-.701.541 0 .685.282.685.66-.001 2.524-.003 5.05.003 7.574.001.375-.117.686-.636.706-.668.024-.641-.39-.641-.764v-3.787z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <ul className="flex gap-x-16">
            <li className="hidden pb-2 md:block">
              <Link className="text-blue hover:text-indigo" to="/">
                Home
              </Link>
            </li>
            <li className="hidden pb-2 md:block">
              <Link className="text-blue hover:text-indigo" to="/products">
                Products
              </Link>
            </li>
            <li className="hidden pb-2 md:block">
              <Link className="text-blue hover:text-indigo" to="/water">
                The Water
              </Link>
            </li>
            <li className="hidden pb-2 md:block">
              <Link className="text-blue hover:text-indigo" to="/science">
                Science
              </Link>
            </li>
            <li>
              <button onClick={handleButtonPress}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 51 34"
                  className="w-5 h-5 md:w-8 md:h-8 hover:animate-pulse text-blue hover:text-indigo"
                >
                  <defs />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M42.191 3.22c-1.397 1.177-2.573 2.06-4.926 2.06s-3.53-.883-4.927-2.06C30.941 2.044 28.956.5 25.5.5s-5.221 1.47-6.838 2.72c-1.618 1.25-2.574 2.06-4.927 2.06-2.353 0-3.529-.883-4.926-2.06C7.412 2.044 5.426.5 1.971.5H.5v2.941h1.471c2.426 0 3.529.882 4.926 2.06 1.397 1.175 3.382 2.72 6.838 2.72s5.221-1.47 6.839-2.72c1.617-1.25 2.573-2.06 4.926-2.06s3.529.882 4.926 2.06c1.398 1.175 3.383 2.72 6.839 2.72 3.456 0 5.22-1.47 6.838-2.72 1.618-1.25 2.573-2.06 4.926-2.06H50.5V.501h-1.471c-3.455.072-5.22 1.47-6.838 2.72z"
                    clipRule="evenodd"
                  />
                  <path
                    stroke="#fff"
                    d="M42.191 3.22c-1.397 1.177-2.573 2.06-4.926 2.06s-3.53-.883-4.927-2.06C30.941 2.044 28.956.5 25.5.5s-5.221 1.47-6.838 2.72c-1.618 1.25-2.574 2.06-4.927 2.06-2.353 0-3.529-.883-4.926-2.06C7.412 2.044 5.426.5 1.971.5H.5v2.941h1.471c2.426 0 3.529.882 4.926 2.06 1.397 1.175 3.382 2.72 6.838 2.72s5.221-1.47 6.839-2.72c1.617-1.25 2.573-2.06 4.926-2.06s3.529.882 4.926 2.06c1.398 1.175 3.383 2.72 6.839 2.72 3.456 0 5.22-1.47 6.838-2.72 1.618-1.25 2.573-2.06 4.926-2.06H50.5V.501h-1.471c-3.455.072-5.22 1.47-6.838 2.72z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M42.191 15.941c-1.397 1.176-2.573 2.06-4.926 2.06s-3.53-.884-4.927-2.06c-1.397-1.176-3.382-2.72-6.838-2.72s-5.221 1.47-6.838 2.72c-1.618 1.25-2.574 2.06-4.927 2.06-2.353 0-3.529-.884-4.926-2.06-1.397-1.176-3.383-2.72-6.838-2.72H.5v2.941h1.471c2.426 0 3.529.882 4.926 2.058 1.397 1.177 3.382 2.721 6.838 2.721s5.221-1.47 6.839-2.72c1.617-1.25 2.573-2.059 4.926-2.059s3.529.882 4.926 2.058c1.398 1.177 3.383 2.721 6.839 2.721 3.456 0 5.22-1.47 6.838-2.72 1.618-1.25 2.573-2.059 4.926-2.059H50.5V13.22h-1.471c-3.455.074-5.22 1.471-6.838 2.721z"
                    clipRule="evenodd"
                  />
                  <path
                    stroke="#fff"
                    d="M42.191 15.941c-1.397 1.176-2.573 2.06-4.926 2.06s-3.53-.884-4.927-2.06c-1.397-1.176-3.382-2.72-6.838-2.72s-5.221 1.47-6.838 2.72c-1.618 1.25-2.574 2.06-4.927 2.06-2.353 0-3.529-.884-4.926-2.06-1.397-1.176-3.383-2.72-6.838-2.72H.5v2.941h1.471c2.426 0 3.529.882 4.926 2.058 1.397 1.177 3.382 2.721 6.838 2.721s5.221-1.47 6.839-2.72c1.617-1.25 2.573-2.059 4.926-2.059s3.529.882 4.926 2.058c1.398 1.177 3.383 2.721 6.839 2.721 3.456 0 5.22-1.47 6.838-2.72 1.618-1.25 2.573-2.059 4.926-2.059H50.5V13.22h-1.471c-3.455.074-5.22 1.471-6.838 2.721z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M42.191 28.735c-1.397 1.177-2.573 2.06-4.926 2.06s-3.53-.883-4.927-2.06c-1.397-1.176-3.382-2.72-6.838-2.72s-5.221 1.47-6.838 2.72c-1.618 1.25-2.574 2.06-4.927 2.06-2.353 0-3.529-.883-4.926-2.06-1.397-1.176-3.383-2.72-6.838-2.72H.5v2.941h1.471c2.426 0 3.529.882 4.926 2.06 1.397 1.175 3.382 2.72 6.838 2.72s5.221-1.47 6.839-2.72c1.617-1.25 2.573-2.06 4.926-2.06s3.529.882 4.926 2.06c1.398 1.175 3.383 2.72 6.839 2.72 3.456 0 5.22-1.47 6.838-2.72 1.618-1.25 2.573-2.06 4.926-2.06H50.5v-2.94h-1.471c-3.455 0-5.22 1.396-6.838 2.72z"
                    clipRule="evenodd"
                  />
                  <path
                    stroke="#fff"
                    d="M42.191 28.735c-1.397 1.177-2.573 2.06-4.926 2.06s-3.53-.883-4.927-2.06c-1.397-1.176-3.382-2.72-6.838-2.72s-5.221 1.47-6.838 2.72c-1.618 1.25-2.574 2.06-4.927 2.06-2.353 0-3.529-.883-4.926-2.06-1.397-1.176-3.383-2.72-6.838-2.72H.5v2.941h1.471c2.426 0 3.529.882 4.926 2.06 1.397 1.175 3.382 2.72 6.838 2.72s5.221-1.47 6.839-2.72c1.617-1.25 2.573-2.06 4.926-2.06s3.529.882 4.926 2.06c1.398 1.175 3.383 2.72 6.839 2.72 3.456 0 5.22-1.47 6.838-2.72 1.618-1.25 2.573-2.06 4.926-2.06H50.5v-2.94h-1.471c-3.455 0-5.22 1.396-6.838 2.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
