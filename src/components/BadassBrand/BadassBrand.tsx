import * as skins from './skins'

export type BadassBrandProps = {
  size?: 'small' | 'normal' | 'large'
  elements?: 'all' | 'icon' | 'typo'
  negative?: boolean
}
const BadassBrand = ({
  size = 'normal',
  elements = 'all',
  negative = false
}: BadassBrandProps) => {
  const showTheName = elements === 'all' || elements === 'typo'
  const showTheBad = elements === 'all' || elements === 'icon'
  const isSingle = elements !== 'all'

  const w = '#FFFFFF'
  const b = '#000000'
  const faceColor = !negative ? w : b
  const shadowColor = !negative ? b : w
  const faceColor2 = shadowColor
  const badassImageURL = '/img/badass.png'

  return (
    <skins.Component
      color={faceColor}
      isSingle={isSingle}
      data-testid="badass-brand-skin"
      size={size}
    >
      <skins.TheBadContainer
        data-testid="badass-brand-thebad"
        show={showTheBad}
      >
        <skins.TheBad src={badassImageURL} alt="Baddass Hunter" />
      </skins.TheBadContainer>

      <skins.TheNameContainer
        data-testid="badass-brand-thename"
        show={showTheName}
      >
        <svg
          viewBox="0 0 147 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          arial-label="Product Hunter"
        >
          <path
            d="M11.387 14.446c-.047-.338-.265-.508-.654-.508H7V6.185h9.8c1.463 0 2.917.523 4.364 1.569 1.291.954 2.24 2.461 2.847 4.523.31 1.077.466 2.37.466 3.877 0 2.723-.513 4.87-1.54 6.438a6.165 6.165 0 01-3.08 2.447 6.41 6.41 0 01-2.216.392h-4.154c-.187 0-.288.046-.303.138a.98.98 0 00-.024.185v.623l-.046 6.208v.692c0 .184.038.292.116.323.094.03.218.046.374.046h3.57l.14 7.985H7.234l.186-7.939c.591 0 1.128-.007 1.61-.023l1.75-.023c.25 0 .373-.146.373-.438l.234-18.762zm1.633 8.47c0 .507.32.76.957.76h3.873c1.587 0 2.77-.845 3.547-2.537.311-.693.467-1.585.467-2.677 0-1.093-.202-1.931-.607-2.516-.389-.6-.855-1.054-1.4-1.361-.824-.462-1.781-.693-2.87-.693H14.07c-.45 0-.715.062-.793.185a.653.653 0 00-.117.392c0 .154-.008.416-.023.785 0 .354-.008.815-.023 1.385 0 .569-.008 1.192-.024 1.869a845.7 845.7 0 01-.046 1.938c0 .6-.008 1.13-.024 1.592v.877zM30.614 14.654c0-.477-.35-.716-1.05-.716h-1.633c-.373-.015-.801-.03-1.284-.046V6.231h3.314c.871-.016 1.579-.023 2.123-.023l3.034-.023h1.19c3.889 0 6.34 1.9 7.35 5.7.265 1 .397 2.107.397 3.323 0 1.215-.101 2.207-.303 2.977-.203.769-.475 1.43-.817 1.984a5.233 5.233 0 01-1.12 1.362c-.42.338-.848.608-1.283.808a6.672 6.672 0 01-2.357.669v.138c.762.215 1.376.662 1.843 1.339.482.661.724 1.492.724 2.492v6.138c0 .447.116.777.35.993.233.2.505.3.816.3.311 0 .576-.131.794-.393.233-.276.35-.561.35-.854v-1.084-1.362c.015-.477.03-1.015.046-1.615l1.61-.046v8.47c0 1.984-.435 3.322-1.306 4.014-.39.308-.926.462-1.61.462-1.727 0-2.676-.992-2.847-2.977a19.54 19.54 0 01-.07-1.638l.163-10.223c0-1.323-.474-2.316-1.423-2.977-.685-.462-1.408-.693-2.17-.693h-2.427c-.296 0-.444.139-.444.416v.692l-.046 7.315v.831c0 .63.272.946.816.946h2.87l-.046 7.846-9.474.139v-7.985h3.01c.67 0 1.004-.392 1.004-1.177v-.9l-.094-16.061v-.9zm2.497-.762c-.42 0-.63.254-.63.762 0 .138-.008.515-.023 1.13V18l-.024 2.123v1.223c0 .293.14.439.42.439l1.937.023 2.847.023c1.696 0 2.925-.692 3.687-2.077.28-.508.42-1.139.42-1.893 0-.769-.125-1.4-.373-1.892-.234-.508-.522-.907-.864-1.2-.622-.554-1.276-.83-1.96-.83l-5.437-.047zM47.952 35.077l-.093-22.246v-1.87c0-1.415.45-2.561 1.353-3.438.871-.83 1.835-1.246 2.893-1.246a666.89 666.89 0 002.847-.046l2.894-.046h.56c1.524 0 2.722.692 3.593 2.077.7 1.107 1.05 2.277 1.05 3.507l.117 19.639.023 4.938c0 2.416-1.05 4.023-3.15 4.823a5.785 5.785 0 01-2.1.37l-5.647.092c-1.447 0-2.575-.616-3.384-1.846-.637-.954-.956-2.023-.956-3.208v-1.5zm5.67-1.246l4.924-.093c1.26 0 2.108-.584 2.543-1.753.156-.431.233-.962.233-1.593V17.538c0-2.246-1.174-3.369-3.523-3.369h-4.457c-1.773 0-2.925.685-3.453 2.054-.187.477-.28.954-.28 1.43v1.593l.07 9.185v1.754c0 1.292.427 2.253 1.283 2.884.684.508 1.571.762 2.66.762zM70.19 30.715l-.094-13.107v-1.131c0-.892-.156-1.523-.467-1.892-.295-.37-.809-.554-1.54-.554h-1.913v-7.8c1.229 0 2.481-.008 3.757-.023l7.187-.023c3.126 0 4.915 1.077 5.367 3.23.155.693.233 1.462.233 2.308v24c0 3.462-1.066 5.377-3.197 5.746-.622.108-1.275.162-1.96.162H66.41v-7.662h2.497c.56 0 .902-.13 1.027-.392.17-.37.256-.823.256-1.362v-1.5zm1.68-6.877l.046 8.008v1.039c0 .677.257 1.053.77 1.13.14.031.28.047.42.047h6.16c1.043 0 1.603-.416 1.68-1.247.032-.246.047-.507.047-.784V15.785c0-1.216-.45-1.893-1.353-2.031a7.743 7.743 0 00-.887-.046H73.2c-.576 0-.95.184-1.12.553-.172.354-.257.785-.257 1.293.015 3.061.031 5.823.047 8.284zM88.997 37.385l-.047-22.593c0-.569-.272-.854-.816-.854h-2.357l.046-7.661 8.33-.092-.046 7.523c-.435.015-.824.03-1.167.046a35.87 35.87 0 01-1.516.046c-.483 0-.724.27-.724.808v16.477c0 1 .311 1.746.934 2.238.435.37.956.554 1.563.554h4.877c1.105 0 1.867-.523 2.287-1.57.14-.353.21-.715.21-1.084v-3.485l-.047-10.615v-2.585c0-.492-.303-.738-.91-.738h-2.287l-.186-7.57 8.307-.045.093 7.615c-.373.015-.716.03-1.027.046h-1.516c-.467 0-.7.27-.7.808l.116 16.638.024 5.954c0 1.57-.187 2.608-.561 3.115-.357.493-.762.831-1.213 1.016-.451.17-1.027.254-1.727.254h-6.37c-2.38 0-3.57-1.416-3.57-4.246zM108.714 34.015l-.093-19.338v-2.354c0-2.892 1.26-4.792 3.78-5.7a7.905 7.905 0 012.66-.438h2.451c1.415 0 2.597.4 3.546 1.2.529.461.918.93 1.167 1.407l-.093-2.515h1.82l-.094 13.477-1.633.092v-2.654c0-1-.296-1.792-.887-2.377-.591-.584-1.439-.877-2.543-.877l-4.69-.046c-1.727 0-2.886.685-3.477 2.054-.202.446-.303.954-.303 1.523l.116 12.808c0 1.938.685 3.054 2.054 3.346.373.077.739.116 1.096.116h5.531c.98 0 1.742-.239 2.286-.716a2.384 2.384 0 00.817-1.846l.023-1.685c0-.569-.039-1.469-.116-2.7l1.68-.138c0 .8.008 1.67.023 2.608l.023 6c0 3.184-.941 5.169-2.823 5.953a4.581 4.581 0 01-1.773.37h-1.26l-1.027.023-1.447.023h-1.563c-3.5 0-5.251-1.97-5.251-5.908v-1.708zM129.109 13.8c-.84 0-1.26.5-1.26 1.5v4.87h-1.61V6.322c4.013-.092 9.17-.138 15.47-.138v13.269l-1.61-.046v-4.385c0-.784-.264-1.223-.793-1.315a3.167 3.167 0 00-.56-.046h-3.524c-.295 0-.443.169-.443.507v.854l-.093 17.054v.946c0 .262.062.43.186.508.125.077.335.115.63.115h2.87v7.985h-9.077l.047-7.892c.467 0 .902-.008 1.307-.024l1.656-.023c.436 0 .654-.33.654-.992V14.354c0-.37-.171-.554-.513-.554h-3.337z"
            fill={shadowColor}
          />
          <path
            d="M10.387 12.68c-.047-.347-.265-.521-.654-.521H6v-7.97h9.8c1.463 0 2.917.538 4.364 1.614 1.291.98 2.24 2.53 2.847 4.648.31 1.107.466 2.435.466 3.985 0 2.799-.513 5.004-1.54 6.617-.762 1.186-1.789 2.024-3.08 2.514a6.254 6.254 0 01-2.216.404h-4.154c-.187 0-.288.047-.303.142-.016.079-.024.142-.024.19v.64l-.046 6.38v.712c0 .19.038.3.116.332.094.031.218.047.374.047h3.57l.14 8.206H6.234l.186-8.158c.591 0 1.128-.008 1.61-.024l1.75-.024c.25 0 .373-.15.373-.45l.234-19.283zm1.633 8.705c0 .522.32.783.957.783h3.873c1.587 0 2.77-.87 3.547-2.609.311-.712.467-1.629.467-2.751 0-1.123-.202-1.985-.607-2.586-.389-.616-.855-1.083-1.4-1.399-.824-.474-1.781-.712-2.87-.712H13.07c-.45 0-.715.064-.793.19a.684.684 0 00-.117.403c0 .159-.008.427-.023.807 0 .364-.008.838-.023 1.423 0 .585-.008 1.225-.024 1.921-.015.696-.03 1.36-.046 1.992 0 .617-.008 1.163-.024 1.637v.901zM29.614 12.894c0-.49-.35-.735-1.05-.735h-1.633c-.373-.016-.801-.032-1.284-.048V4.237h3.314a121.98 121.98 0 012.123-.024l3.034-.023h1.19c3.889 0 6.34 1.953 7.35 5.858.265 1.028.397 2.166.397 3.415 0 1.25-.101 2.27-.303 3.06-.203.79-.475 1.47-.817 2.04-.327.57-.7 1.036-1.12 1.4-.42.347-.848.624-1.283.83a6.534 6.534 0 01-2.357.687v.142c.762.222 1.376.68 1.843 1.376.482.68.724 1.534.724 2.562v6.309c0 .458.116.798.35 1.02.233.205.505.308.816.308.311 0 .576-.135.794-.403.233-.285.35-.577.35-.878v-1.115-1.4c.015-.49.03-1.043.046-1.66l1.61-.047V36.4c0 2.04-.435 3.415-1.306 4.127-.39.316-.926.474-1.61.474-1.727 0-2.676-1.02-2.847-3.06-.047-.569-.07-1.13-.07-1.684l.163-10.507c0-1.36-.474-2.38-1.423-3.06-.685-.474-1.408-.71-2.17-.71h-2.427c-.296 0-.444.142-.444.426v.712l-.046 7.518v.854c0 .648.272.973.816.973h2.87l-.046 8.064-9.474.142v-8.206h3.01c.67 0 1.004-.404 1.004-1.21v-.925l-.094-16.508v-.925zm2.497-.783c-.42 0-.63.261-.63.783 0 .143-.008.53-.023 1.162v2.277l-.024 2.182v1.257c0 .3.14.451.42.451l1.937.024 2.847.023c1.696 0 2.925-.711 3.687-2.134.28-.522.42-1.17.42-1.945 0-.79-.125-1.439-.373-1.945-.234-.522-.522-.933-.864-1.233-.622-.57-1.276-.854-1.96-.854l-5.437-.048zM46.952 33.885l-.093-22.864V9.098c0-1.454.45-2.632 1.353-3.534.871-.853 1.835-1.28 2.893-1.28 1.074-.016 2.023-.032 2.847-.048l2.894-.047h.56c1.524 0 2.722.711 3.593 2.134.7 1.139 1.05 2.34 1.05 3.605l.117 20.184.023 5.076c0 2.483-1.05 4.135-3.15 4.957a5.649 5.649 0 01-2.1.38l-5.647.094c-1.447 0-2.575-.632-3.384-1.897-.637-.98-.956-2.08-.956-3.297v-1.541zm5.67-1.281l4.924-.095c1.26 0 2.108-.6 2.543-1.803.156-.442.233-.988.233-1.636V15.859c0-2.309-1.174-3.463-3.523-3.463h-4.457c-1.773 0-2.925.704-3.453 2.111-.187.49-.28.98-.28 1.47v1.637l.07 9.44v1.802c0 1.329.427 2.317 1.283 2.965.684.522 1.571.783 2.66.783zM69.19 29.402l-.094-13.472v-1.162c0-.917-.156-1.565-.467-1.945-.295-.38-.809-.57-1.54-.57h-1.913V4.238c1.229 0 2.481-.008 3.757-.024l7.187-.023c3.126 0 4.915 1.107 5.367 3.32.155.712.233 1.502.233 2.372V34.55c0 3.557-1.066 5.526-3.197 5.906a11.18 11.18 0 01-1.96.166H65.41v-7.875h2.497c.56 0 .902-.134 1.027-.403.17-.38.256-.846.256-1.4v-1.541zm1.68-7.068l.046 8.23v1.067c0 .696.257 1.084.77 1.163.14.031.28.047.42.047h6.16c1.043 0 1.603-.427 1.68-1.28.032-.254.047-.523.047-.807V14.056c0-1.249-.45-1.944-1.353-2.087a7.525 7.525 0 00-.887-.047H72.2c-.576 0-.95.19-1.12.569-.172.364-.257.806-.257 1.328.015 3.147.031 5.985.047 8.515zM87.997 36.256l-.047-23.22c0-.585-.272-.877-.816-.877h-2.357l.046-7.874 8.33-.095-.046 7.732c-.435.016-.824.031-1.167.047-.668.032-1.174.048-1.516.048-.483 0-.724.276-.724.83V29.78c0 1.028.311 1.795.934 2.301.435.38.956.57 1.563.57h4.877c1.105 0 1.867-.538 2.287-1.614.14-.363.21-.735.21-1.114v-3.582l-.047-10.91v-2.656c0-.506-.303-.76-.91-.76h-2.287l-.186-7.779 8.307-.047.093 7.827c-.373.016-.716.031-1.027.047h-1.516c-.467 0-.7.277-.7.83l.116 17.1.024 6.12c0 1.613-.187 2.68-.561 3.202-.357.506-.762.854-1.213 1.044-.451.173-1.027.26-1.727.26h-6.37c-2.38 0-3.57-1.454-3.57-4.364zM107.714 32.794l-.093-19.876v-2.42c0-2.972 1.26-4.925 3.78-5.858.825-.3 1.711-.45 2.66-.45h2.451c1.415 0 2.597.41 3.546 1.233.529.474.918.957 1.167 1.447l-.093-2.585h1.82l-.094 13.85-1.633.096v-2.728c0-1.028-.296-1.842-.887-2.443-.591-.6-1.439-.901-2.543-.901l-4.69-.048c-1.727 0-2.886.704-3.477 2.111-.202.459-.303.98-.303 1.566l.116 13.163c0 1.993.685 3.139 2.054 3.44.373.078.739.118 1.096.118h5.531c.98 0 1.742-.245 2.286-.735.545-.506.817-1.139.817-1.898l.023-1.731c0-.585-.039-1.51-.116-2.775l1.68-.142c0 .822.008 1.715.023 2.68l.023 6.166c0 3.273-.941 5.313-2.823 6.12a4.474 4.474 0 01-1.773.38h-1.26l-1.027.023-1.447.023h-1.563c-3.5 0-5.251-2.023-5.251-6.071v-1.755zM128.109 12.017c-.84 0-1.26.514-1.26 1.541v5.005h-1.61V4.333c4.013-.096 9.17-.143 15.47-.143v13.638l-1.61-.048v-4.506c0-.807-.264-1.257-.793-1.352a3.09 3.09 0 00-.56-.048h-3.524c-.295 0-.443.174-.443.522v.878l-.093 17.527v.973c0 .268.062.443.186.521.125.08.335.12.63.12h2.87v8.206h-9.077l.047-8.112c.467 0 .902-.008 1.307-.024l1.656-.023c.436 0 .654-.34.654-1.02V12.586c0-.38-.171-.57-.513-.57h-3.337z"
            fill={faceColor}
          />
          <path
            d="M10.17 71.156c-.43.277-.917.415-1.46.415-.541 0-1.006-.142-1.393-.428-.439.286-.843.428-1.213.428-.37 0-.676-.035-.917-.107a1.997 1.997 0 01-.62-.267c-.378-.233-.567-.523-.567-.87 0-.18.047-.335.142-.47.19.152.43.228.723.228.766 0 1.295-.339 1.587-1.017V62.52c0-.697-.335-1.223-1.006-1.58l-.568-.308c.765-.366 1.247-.764 1.445-1.192a1.8 1.8 0 00.13-.723v-5.65c-.293-.688-.822-1.032-1.588-1.032-.293 0-.534.076-.723.228A.77.77 0 014 51.808c0-.179.047-.344.142-.496.103-.151.245-.281.426-.388.387-.25.83-.375 1.33-.375.507 0 .98.143 1.419.428.387-.285.852-.428 1.394-.428.55 0 1.037.143 1.458.428a2.294 2.294 0 011.356-.428c.731 0 1.252.254 1.561.763.104.16.155.33.155.51a.64.64 0 01-.155.44 1.1 1.1 0 00-.71-.227c-.662 0-1.105.335-1.329 1.005v7.07h6.105v-7.07c-.224-.67-.667-1.005-1.33-1.005a1.1 1.1 0 00-.71.228.64.64 0 01-.154-.442c0-.178.047-.348.142-.509.103-.16.232-.299.387-.415.327-.232.723-.348 1.187-.348.5 0 .951.143 1.355.428a2.617 2.617 0 011.459-.428c.542 0 1.007.143 1.394.428.421-.285.822-.428 1.2-.428.379 0 .689.036.93.107.24.063.451.152.632.268.37.232.555.522.555.87a.791.791 0 01-.142.469c-.19-.152-.43-.228-.723-.228-.766 0-1.295.344-1.587 1.031v5.651c0 .696.33 1.236.994 1.62.189.107.382.205.58.295-.516.259-.865.468-1.045.63-.353.338-.53.758-.53 1.258v6.548c.293.678.822 1.017 1.588 1.017.293 0 .534-.076.723-.227.095.133.142.29.142.468 0 .17-.052.33-.155.482a1.221 1.221 0 01-.4.389c-.396.25-.852.374-1.368.374-.508 0-.973-.142-1.394-.428-.387.286-.852.428-1.394.428-.534 0-1.02-.142-1.459-.428a2.294 2.294 0 01-1.355.428c-.731 0-1.256-.254-1.574-.763a.988.988 0 01-.142-.509.64.64 0 01.155-.441 1.1 1.1 0 00.71.227c.662 0 1.105-.334 1.329-1.004v-7.057h-6.105v7.057c.224.67.667 1.004 1.33 1.004a1.1 1.1 0 00.71-.227.64.64 0 01.154.441.927.927 0 01-.155.51c-.094.16-.223.298-.387.414-.31.233-.701.349-1.174.349-.49 0-.943-.139-1.356-.416zm8.053-13.39c-.008.955-.013 2.54-.013 4.754 0 2.214.03 3.517.09 3.91.112.75.336 1.191.672 1.325v-1.74c0-2.375.017-3.714.051-4.017.035-.313.07-.532.104-.657.077-.312.34-.549.787-.71a1.148 1.148 0 01-.787-.763c-.104-.428-.155-2.195-.155-5.302-.336.16-.542.482-.62.964-.077.527-.12 1.272-.129 2.236zm-10.532 9.99c.413-.17.646-.755.697-1.755.043-1 .065-2.383.065-4.15 0-1.768-.005-2.942-.013-3.522 0-.59-.004-1.063-.013-1.42-.026-1.044-.12-1.678-.284-1.901-.155-.223-.305-.37-.452-.442 0 3.107-.051 4.874-.155 5.302-.12.358-.413.612-.877.764.516.187.809.415.877.683.104.428.155 1.995.155 4.7v1.74zM42.294 66.952c.155.393.469.768.942 1.125-.3.125-.68.42-1.136.883a8.72 8.72 0 01-1.51 1.246c-.559.366-1.114.66-1.665.883-.998.411-2.078.616-3.24.616-1.152 0-2.202-.142-3.148-.428-.938-.286-1.717-.674-2.336-1.165-1.214-.973-1.82-2.267-1.82-3.883v-3.71c0-.41-.082-.713-.245-.91-.259-.33-.702-.656-1.33-.977.585-.277.964-.522 1.136-.737.292-.348.439-.74.439-1.178v-5.65c-.293-.688-.822-1.032-1.588-1.032-.292 0-.533.076-.723.228a.77.77 0 01-.142-.455.92.92 0 01.142-.496 1.36 1.36 0 01.413-.388c.396-.25.848-.375 1.356-.375.516 0 .99.147 1.42.442a2.664 2.664 0 011.497-.442c.55 0 1.05.147 1.497.442.43-.295.834-.442 1.213-.442.378 0 .688.036.93.107.24.063.45.152.632.268.37.232.555.522.555.87a.79.79 0 01-.142.469c-.19-.152-.43-.228-.723-.228-.766 0-1.295.344-1.588 1.031v5.651c0 .437.09.763.271.977.284.349.719.661 1.304.938-.628.321-1.028.585-1.2.79-.25.321-.375.687-.375 1.098v3.736c0 1.08.392 1.968 1.175 2.664.723.634 1.544.951 2.465.951.964 0 1.82-.308 2.569-.924.765-.625 1.148-1.384 1.148-2.276v-4.272c0-.392-.082-.683-.245-.87-.25-.277-.693-.576-1.33-.897.594-.304.977-.55 1.15-.737.283-.312.425-.66.425-1.044v-5.959c-.37-.571-.822-.857-1.355-.857s-.925.076-1.175.228c-.094-.16-.142-.38-.142-.656 0-.286.134-.531.4-.737.267-.214.616-.321 1.046-.321.43 0 .813.116 1.149.348a1.646 1.646 0 011.032-.348c.396 0 .745.12 1.046.361a1.86 1.86 0 011.11-.361c.404 0 .727.112.968.335.25.214.374.464.374.75 0 .285-.043.495-.13.629-.249-.152-.649-.228-1.2-.228-.541 0-.98.286-1.316.857v5.959c0 .393.082.678.245.857.258.277.745.585 1.459.924-.757.384-1.21.651-1.355.803-.233.241-.349.563-.349.964v4.553zm-12.003.803c.077-.482.116-2.026.116-4.633 0-2.615-.004-4.213-.013-4.793 0-.59-.004-1.063-.013-1.42-.026-1.053-.125-1.687-.297-1.901-.163-.223-.318-.37-.464-.442 0 3.107-.052 4.874-.155 5.302-.12.358-.413.612-.878.764.517.187.809.415.878.683.103.428.155 1.352.155 2.771 0 1.42.017 2.259.051 2.518.043.259.1.468.168.63.112.285.263.459.452.521zM48.476 71.21a1.769 1.769 0 01-1.097.362c-.404 0-.731-.108-.98-.322-.242-.223-.362-.477-.362-.763 0-.286.043-.495.13-.63.249.152.64.228 1.174.228.542 0 .99-.38 1.342-1.138V62.52c0-.42-.086-.732-.258-.938-.258-.32-.697-.638-1.317-.95.628-.313 1.024-.572 1.188-.777.258-.34.387-.718.387-1.138v-5.65c-.293-.688-.822-1.032-1.588-1.032-.292 0-.533.076-.722.228a.79.79 0 01-.142-.469c0-.178.043-.343.129-.495.086-.152.198-.286.335-.402.301-.232.706-.348 1.213-.348.517 0 .956.147 1.317.442.24-.295.572-.442.994-.442.421 0 .761.152 1.02.455.249-.303.503-.455.76-.455.268 0 .465.027.595.08.137.054.253.125.348.215.138.116.293.343.465.682l8.002 14.957V62.4c0-.392-.082-.683-.245-.87-.25-.277-.693-.576-1.33-.897.594-.304.977-.55 1.149-.737.284-.312.426-.66.426-1.044v-5.61a2.54 2.54 0 00-.736-.884 1.584 1.584 0 00-.98-.322c-.362 0-.668.076-.917.228-.095-.16-.142-.38-.142-.656 0-.286.133-.531.4-.737.267-.214.615-.321 1.046-.321.43 0 .813.116 1.148.348a1.646 1.646 0 011.033-.348c.395 0 .744.12 1.045.361a1.86 1.86 0 011.11-.361c.404 0 .727.112.968.335.25.214.374.464.374.75 0 .285-.043.495-.129.629-.25-.152-.65-.228-1.2-.228-.55 0-.99.384-1.317 1.152v5.664c0 .384.078.665.233.843.258.295.705.607 1.342.938-.697.393-1.114.665-1.252.817-.215.24-.323.558-.323.95l.233 6.802c.31.59.796.884 1.458.884.293 0 .534-.076.723-.227.095.133.142.29.142.468a.988.988 0 01-.129.496 1.475 1.475 0 01-.336.401c-.3.233-.666.349-1.097.349-.43 0-.817-.09-1.161-.268-.68.401-1.373.37-2.078-.094-.276.241-.538.362-.787.362-.25 0-.435-.023-.555-.067a.847.847 0 01-.336-.242c-.164-.17-.417-.593-.762-1.272L50.49 55.799v13.149c.353.759.8 1.138 1.342 1.138s.938-.076 1.188-.227c.094.16.141.383.141.67 0 .276-.133.521-.4.735-.266.206-.61.308-1.032.308a2.13 2.13 0 01-1.162-.334c-.31.223-.667.335-1.071.335-.396 0-.736-.121-1.02-.362zm10.093-3.455c.06-.08.09-.205.09-.375 0-.178-.025-.374-.077-.589a5.237 5.237 0 00-.193-.71c-.181-.5-.418-1.035-.71-1.606l-5.473-9.909c-.06.098-.09.277-.09.536 0 .553.366 1.522 1.097 2.905l5.356 9.748zM77.839 71.13a2.663 2.663 0 01-1.497.442 2.767 2.767 0 01-1.51-.442c-.473.294-.908.442-1.304.442s-.714-.036-.955-.108a2.172 2.172 0 01-.632-.267c-.37-.233-.555-.523-.555-.87a.79.79 0 01.142-.47c.189.152.438.228.748.228.319 0 .637-.085.955-.254.327-.17.573-.433.736-.79V62.52c0-.41-.082-.714-.245-.91-.258-.331-.701-.657-1.33-.978.586-.277.964-.522 1.136-.737.293-.348.439-.74.439-1.178v-6.213a2.89 2.89 0 00-1.02-.16c-.387 0-.796.106-1.226.32-.43.215-.817.527-1.161.938-.766.928-1.149 2.142-1.149 3.642 0 .866.138 1.504.413 1.915-.103.223-.297.335-.58.335-.285 0-.539-.067-.762-.201a1.91 1.91 0 01-.581-.55 2.51 2.51 0 01-.504-1.499c0-.535.095-.99.284-1.366a2.05 2.05 0 01-.477-1.325c0-.5.129-.91.387-1.232-.361-.402-.542-.942-.542-1.62 0-.786.348-1.313 1.045-1.58.207-.08.388-.121.543-.121.292 0 .512.067.658.2-.06.215-.09.367-.09.456 0 .357.12.536.36.536.13 0 .263-.018.401-.054l.58-.174c1.007-.277 1.846-.415 2.518-.415.67 0 1.26.152 1.768.455a2.569 2.569 0 011.497-.455c.56 0 1.067.152 1.523.455.49-.303.998-.455 1.523-.455.835 0 1.566.09 2.194.268l1.149.321c.137.036.27.054.4.054.24 0 .361-.179.361-.536 0-.09-.03-.24-.09-.455a.79.79 0 01.555-.201c.224 0 .439.04.645.12.207.08.387.197.542.349.336.312.504.763.504 1.352 0 .58-.181 1.08-.542 1.5.258.321.387.727.387 1.218s-.164.938-.49 1.34c.197.365.296.731.296 1.097s-.043.697-.129.991c-.086.295-.21.554-.374.777-.353.5-.796.75-1.33.75-.292 0-.49-.112-.593-.335.275-.41.413-1.027.413-1.848 0-.83-.108-1.549-.323-2.156-.206-.616-.482-1.133-.826-1.553-.697-.84-1.519-1.259-2.465-1.259-.362 0-.676.054-.942.161v6.213c0 .437.09.763.27.977.285.349.72.661 1.304.938-.628.321-1.028.585-1.2.79-.25.321-.374.687-.374 1.098v6.52c.155.358.391.621.71.79.326.17.65.255.968.255.318 0 .572-.076.761-.227.095.133.142.29.142.468 0 .17-.052.33-.155.482a1.22 1.22 0 01-.4.389c-.396.25-.86.374-1.394.374a2.854 2.854 0 01-1.51-.441zm-2.633-3.375c.43-.17.667-.754.71-1.754.052-1 .077-2.383.077-4.15 0-1.768-.004-2.942-.012-3.522 0-.59-.005-1.063-.013-1.42-.026-1.053-.125-1.687-.297-1.901-.164-.223-.319-.37-.465-.442 0 3.107-.052 4.874-.155 5.302-.12.358-.413.612-.877.764.516.187.808.415.877.683.103.428.155 1.995.155 4.7v1.74zM91.894 71.572a2.706 2.706 0 01-1.51-.429c-.439.286-.847.428-1.226.428-.37 0-.675-.035-.916-.107a2.172 2.172 0 01-.633-.267c-.37-.233-.555-.523-.555-.87a.79.79 0 01.142-.47c.19.152.43.228.723.228.766 0 1.295-.339 1.588-1.017V62.52c0-.41-.082-.714-.246-.91-.258-.331-.7-.657-1.329-.978.585-.277.964-.522 1.136-.737.292-.348.439-.74.439-1.178v-5.65c-.293-.688-.822-1.032-1.588-1.032-.292 0-.533.076-.723.228a.769.769 0 01-.142-.455c0-.179.048-.344.142-.496.104-.151.241-.281.413-.388.396-.25.848-.375 1.356-.375.516 0 .99.147 1.42.442a2.73 2.73 0 011.535-.442c.577 0 1.102.174 1.575.522.912-.348 1.966-.522 3.162-.522.886 0 1.643.09 2.272.268l1.148.321c.138.036.271.054.4.054.241 0 .362-.179.362-.536 0-.09-.03-.24-.091-.455.241-.045.547-.067.917-.067s.684.13.942.388c.258.25.387.616.387 1.098 0 .473-.082.822-.245 1.045.232.357.348.794.348 1.312 0 .509-.167.937-.503 1.285.103.268.155.532.155.79 0 .25-.043.482-.129.697-.078.205-.177.379-.297.522-.241.259-.486.388-.736.388-.361 0-.688-.08-.981-.24.104-.215.155-.532.155-.952 0-.981-.236-1.843-.71-2.584-.645-1.018-1.613-1.526-2.904-1.526-.654 0-1.247.165-1.78.495-.526.33-.896.804-1.11 1.42v5.181c.3.197.58.295.838.295.267 0 .465-.004.594-.013.138-.01.275-.027.413-.054.353-.053.624-.125.813-.214.361-.179.542-.616.542-1.312 0-.393-.09-.697-.27-.91a1.07 1.07 0 01.645-.188c.576 0 .993.24 1.251.723.095.17.142.357.142.562 0 .205-.051.46-.154.763.352.42.529.92.529 1.5 0 .571-.177 1.067-.53 1.486.104.304.155.58.155.83 0 .242-.047.474-.142.697-.094.223-.21.401-.348.535-.267.25-.568.375-.903.375-.241 0-.457-.071-.646-.214.18-.312.271-.678.271-1.098 0-.83-.22-1.343-.658-1.54a3.443 3.443 0 00-1.33-.24c-.498 0-.903.093-1.213.28v6.695c.5.911 1.463 1.366 2.891 1.366 1.618 0 2.72-.517 3.305-1.553a7.563 7.563 0 001.019-3.816c0-.393-.034-.697-.103-.91.215-.224.439-.335.671-.335.232 0 .409.035.529.107.121.062.228.142.323.24.206.242.31.487.31.737l-.078.656c0 .17.043.308.129.415.172.188.258.366.258.536 0 .16-.051.357-.154.59.197.115.374.29.529.521.163.224.245.456.245.697 0 .508-.207.964-.62 1.365.181.268.271.656.271 1.165 0 .5-.142.924-.425 1.272a1.306 1.306 0 01-1.085.536 3.68 3.68 0 01-.748-.08c.034-.197.051-.393.051-.59 0-.41-.18-.615-.542-.615-.404 0-.808.084-1.213.254-.955.402-2.044.603-3.265.603-1.213 0-2.246-.166-3.098-.496-.447.33-.968.496-1.562.496zm-1.148-3.817c.43-.17.667-.754.71-1.754.051-1 .077-2.383.077-4.15 0-1.768-.004-2.942-.013-3.522 0-.59-.004-1.063-.013-1.42-.026-1.053-.125-1.687-.297-1.901-.163-.223-.318-.37-.464-.442 0 3.107-.052 4.874-.155 5.302-.12.358-.413.612-.878.764.516.187.809.415.878.683.103.428.155 1.995.155 4.7v1.74zm3.252-.134c0 .027.004.05.013.067l-.013-.067zM111.99 71.143a2.684 2.684 0 01-1.497.428 2.684 2.684 0 01-1.497-.428c-.439.286-.848.428-1.226.428-.37 0-.676-.035-.917-.107a2.16 2.16 0 01-.632-.267c-.37-.233-.555-.523-.555-.87 0-.18.047-.335.142-.47.189.152.43.228.723.228.765 0 1.295-.339 1.587-1.017V62.52c0-.41-.082-.714-.245-.91-.258-.331-.701-.657-1.33-.978.586-.277.964-.522 1.136-.737a1.78 1.78 0 00.439-1.178v-5.65c-.292-.688-.822-1.032-1.587-1.032-.293 0-.534.076-.723.228a.767.767 0 01-.142-.455c0-.179.047-.344.142-.496.103-.151.241-.281.413-.388.396-.25.847-.375 1.355-.375.516 0 .99.147 1.42.442a2.661 2.661 0 011.497-.442c.551 0 1.05.147 1.497.442.972-.384 2.048-.576 3.227-.576 1.187 0 2.181.112 2.981.335.8.223 1.489.54 2.065.95 1.162.83 1.885 1.987 2.169 3.469.111.66.52 1.16 1.226 1.5-.671.392-1.11 1.017-1.317 1.874-.421 1.767-1.475 2.87-3.162 3.307.869.241 1.579.737 2.13 1.487.568.776.852 1.691.852 2.745v1.339c0 1.285.4 2.115 1.2 2.49.241.116.503.174.787.174.284 0 .521-.076.71-.227.095.133.142.29.142.468 0 .17-.043.33-.129.482a1.222 1.222 0 01-.349.389c-.309.25-.671.374-1.084.374-.413 0-.817-.115-1.213-.348-.723.411-1.398.451-2.026.12a1.408 1.408 0 01-.762.228c-.267 0-.525-.062-.774-.187-.241-.125-.456-.33-.646-.616-.404-.616-.606-1.562-.606-2.839v-.99c0-2.063-.568-3.402-1.704-4.017-.378-.206-.822-.308-1.329-.308h-1.51v6.52c.232.634.675.951 1.329.951.293 0 .534-.076.723-.227.095.133.142.33.142.589 0 .259-.138.513-.413.763-.267.241-.671.362-1.213.362a2.519 2.519 0 01-1.446-.429zm3.356-18.947c-1.652 0-2.478.665-2.478 1.995v5.477c0 .464.176.776.529.937.335.152.83.228 1.484.228.663 0 1.123-.036 1.381-.108.267-.08.495-.214.684-.401.387-.384.581-1.027.581-1.928v-3.91c0-1.116-.447-1.83-1.342-2.143a2.413 2.413 0 00-.839-.147zm3.046.857c.267.625.4 1.625.4 3 0 2.365-.108 3.78-.323 4.244.473-.098.813-.754 1.02-1.968l.103-.55c.095-.58.37-.95.826-1.11-.335-.117-.551-.255-.645-.416-.103-.187-.198-.504-.284-.95a8.923 8.923 0 00-.245-1.098 3.22 3.22 0 00-.271-.657c-.164-.285-.357-.45-.581-.495zm-9.035 14.702c.43-.17.667-.754.71-1.754.052-1 .077-2.383.077-4.15 0-1.768-.004-2.942-.012-3.522 0-.59-.005-1.063-.013-1.42-.026-1.053-.125-1.687-.297-1.901-.164-.223-.319-.37-.465-.442 0 3.107-.052 4.874-.155 5.302-.12.358-.413.612-.877.764.516.187.808.415.877.683.103.428.155 1.995.155 4.7v1.74zm8.906-3.669c.344.402.516.893.516 1.473v1.768c0 1.482.284 2.272.852 2.37.155.027.305.022.452-.014a2.951 2.951 0 01-.465-1.58V66.23c0-.705-.095-1.205-.284-1.5-.327-.5-.684-.714-1.071-.643z"
            fill={faceColor2}
          />
        </svg>
      </skins.TheNameContainer>
    </skins.Component>
  )
}

export default BadassBrand
