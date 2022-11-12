import aiohttp
import plistlib

state.persist("pyscript.airport_playing")


@time_trigger("period(2020/01/01, 4sec)")
async def get_giga_state():
    async with aiohttp.ClientSession() as session:
        try:
            async with session.get("http://192.168.1.222:7000/info") as res:
                data = res.read()  # requires await outside HA pyscript environemnt
                plistData = plistlib.loads(data)

                playing = plistData["statusFlags"] & 0x800 != 0

                pyscript.airport_playing = playing

        except Exception as e:
            pyscript.airport_playing = "Error: " + repr(e)