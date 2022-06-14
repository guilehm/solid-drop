export type Sprite = {
  name: string
  tileSet: string
  spriteX: number
  spriteY: number
  spriteWidth: number
  spriteHeight: number
}

export type Player = {
  id: number
  user_id: number
  name: string
  xp: number
  sprite: string
  position_x: number
  position_y: number
}
