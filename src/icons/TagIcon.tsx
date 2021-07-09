interface Props {
    width?: number;
    height?: number;
}

export const TagIcon: React.FC<Props> = ({width = '1em', height = '1em'})=> {
    return <svg width={width} height={height} data-name="Layer 1" viewBox="0 0 90 100" x="0px" y="0px"><title>Artboard 32</title><path d="M49.2,3.5a1.2,1.2,0,1,0-2.4,0V16.626h2.4Z"/><path d="M43.861,33.912A4.139,4.139,0,1,0,48,29.773,4.143,4.143,0,0,0,43.861,33.912Z"/><path d="M42.847,59.766A5.159,5.159,0,0,0,47,64.818v-10.1A5.159,5.159,0,0,0,42.847,59.766Z"/><path d="M49,77.526a5.15,5.15,0,0,0,0-10.1Z"/><path d="M59.909,17.018a1.2,1.2,0,0,0-.887-.392H49.2V27.488a6.539,6.539,0,1,1-2.4,0V16.626H36.978a1.2,1.2,0,0,0-.887.392L26.033,28.04a1.2,1.2,0,0,0-.313.809V92.5a1.2,1.2,0,0,0,1.2,1.2H69.08a1.2,1.2,0,0,0,1.2-1.2V28.849a1.2,1.2,0,0,0-.313-.809ZM55.554,72.473A7.56,7.56,0,0,1,49,79.953V81a1,1,0,0,1-2,0V79.953a7.56,7.56,0,0,1-6.554-7.48,1.2,1.2,0,0,1,2.4,0A5.159,5.159,0,0,0,47,77.526V67.246a7.545,7.545,0,0,1,0-14.96V50a1,1,0,0,1,2,0v2.286a7.559,7.559,0,0,1,6.554,7.48,1.2,1.2,0,0,1-2.4,0A5.159,5.159,0,0,0,49,54.713V64.994A7.559,7.559,0,0,1,55.554,72.473Z"/></svg>
}