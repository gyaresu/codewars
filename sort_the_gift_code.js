function sortGiftCode(code){
    return code.split('').sort().join('');
}

sortGiftCode( 'abcdef' );//=> returns 'abcdef'
sortGiftCode( 'pqksuvy' );//=> returns 'kpqsuvy'
sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' );//=> returns 'abcdefghijklmnopqrstuvwxyz'
