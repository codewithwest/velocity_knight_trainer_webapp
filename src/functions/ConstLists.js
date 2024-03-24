import { main_logo } from "./imageProvider"

let aboutInfoText, aboutCardText,
    moreList

aboutInfoText = [
    ['Goal', 'We have a goal to reach all those that are committed to their course and aim to help the next person too.'],
    ['Mission', 'Give a meaning to documenting into existance and inspiring all, show the now that tomorrow begings today.'],
    ['Vision', 'Bring athletics closer to the people but even closer the athletes both established and aspiring.'],
    ['Status', 'Training and preparing for the season and for all the seasons to come. Keeping Athletics alive.'],
]

aboutCardText = [
    [main_logo, 'Founder', 'Founded by the Work with no face...  We do it for progress and not for recognition.', 'The People'],
    [main_logo, 'Fellow Athetes', 'we recognise your love for the sport we are here to support you and see you shine, we Love you.', 'With Love'],
    [main_logo, 'Sponsors', 'We help you express your passion and be able to relieve your best memories.', 'With Passion'],
    [main_logo, 'Staff', 'Here we respect your data and remember what you share with us remain with us.', 'With Honor'],
]

moreList = [
    ["Create new custom session",],
    ["Session description",],
    ["Session type",],
    ["session feedback after session",],
    ["export to goofle docs as table",],
    ["Allows coach to access your data",],
    ["Allows coach to manage multiple athletes data",],
]
export {
    aboutInfoText,
    aboutCardText, moreList
}