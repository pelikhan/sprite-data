namespace sprites {
    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=spriteDataSetNumber block="set $sprite data $name to number $value"
    //% group="Data"
    //% weight=10
    export function setDataNumber(sprite: Sprite, name: string, value: number) {
        if (!sprite) return;
        const d = sprite.data();
        d[name] = value;
    }

    /**
     * Gets a number in the data of a sprite
     */
    //% blockId=spriteDataGetNumber block="$sprite data $name as number"
    //% group="Data"
    //% weight=10
    export function readDataNumber(sprite: Sprite, name: string): number {
        if (!sprite) return 0;
        const d = sprite.data();
        return d[name] as number;
    }

    /**
     * Sets a string in the data of a sprite
     */
    //% blockId=spriteDataSetString block="set $sprite data $name to string $value"
    //% group="Data"
    //% weight=10
    export function setDataString(sprite: Sprite, name: string, value: string) {
        if (!sprite) return;
        const d = sprite.data();
        d[name] = value;
    }

    /**
     * Gets a number in the data of a sprite
     */
    //% blockId=spriteDataGetNumber block="$sprite data $name as number"
    //% group="Data"
    //% weight=10
    export function readDataString(sprite: Sprite, name: string): string {
        if (!sprite) return "";
        const d = sprite.data();
        return d[name] as string;
    }
}