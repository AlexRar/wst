read -n1 -rep 'Would you like to install the packages? (y,n)' INST
if [[ $INST == "Y" || $INST == "y" ]]; then
sudo pacman -Syu
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
sudo pacman -S --noconfirm a52dec\
abseil-cpp\
acl\
adobe-source-code-pro-fonts\
adwaita-cursors\
adwaita-icon-theme\
adwaita-icon-theme-legacy\
alembic\
alsa-card-profiles\
alsa-lib\
alsa-topology-conf\
alsa-ucm-conf\
amd-ucode\
anydesk-bin\
aom\
appstream\
archlinux-keyring\
argon2\
aribb24\
assimp\
at-spi2-core\
atkmm\
attr\
audit\
autoconf\
automake\
avahi\
base\
base-devel\
bash\
binutils\
bison\
blas\
blosc\
blueberry\
bluez\
bluez-libs\
bluez-tools\
boost\
boost-libs\
breeze-icons\
brotli\
btrfs-progs\
bzip2\
ca-certificates\
ca-certificates-mozilla\
ca-certificates-utils\
cairo\
cairomm\
cantarell-fonts\
cblas\
chrony\
cifs-utils\
clang\
cmake\
compiler-rt\
coreutils\
cppdap\
cracklib\
cryptsetup\
curl\
dav1d\
db5.3\
dbus\
dbus-broker\
dbus-broker-units\
dconf\
debugedit\
default-cursors\
desktop-file-utils\
device-mapper\
diffutils\
djvulibre\
dos2unix\
double-conversion\
draco\
duktape\
dunst\
e2fsprogs\
efibootmgr\
efivar\
ell\
embree\
enchant\
exfat-utils\
exiv2\
exo\
expat\
f3d\
faad2\
fakeroot\
fastfetch\
ffmpeg\
ffmpeg4.4\
fftw\
file\
filesystem\
findutils\
flac\
flex\
fmt\
fontconfig\
freeglut\
freeimage\
freetype2\
fribidi\
fuse-common\
fuse2\
fuse3\
gawk\
gc\
gcc\
gcc-libs\
gcr-4\
gdbm\
gdk-pixbuf2\
gedit\
geoclue\
gettext\
giflib\
girara\
git\
gl2ps\
glew\
glfw\
glib-networking\
glib2\
glibc\
glibmm\
glslang\
glu\
gmp\
gnome-bluetooth\
gnome-disk-utility\
gnu-free-fonts\
gnupg\
gnutls\
gobject-introspection\
gobject-introspection-runtime\
gperftools\
gpgme\
gpm\
graphene\
graphite\
graphite-gtk-theme\
grep\
groff\
gsettings-desktop-schemas\
gsm\
gspell\
gssdp\
gst-plugin-pipewire\
gst-plugins-bad-libs\
gst-plugins-base-libs\
gstreamer\
gtest\
gtk-layer-shell\
gtk-update-icon-cache\
gtk2\
gtk3\
gtk4\
gtkglext\
gtkmm3\
guile\
gupnp\
gupnp-igd\
gvfs\
gvfs-mtp\
gzip\
harfbuzz\
harfbuzz-icu\
hdf5\
hicolor-icon-theme\
hidapi\
highway\
htop\
hunspell\
hwdata\
hwloc\
hyprcursor\
hyprland\
hyprlang\
hyprlock\
hyprpaper\
hyprutils\
iana-etc\
icu\
imath\
imv\
intel-gmmlib\
intel-media-driver\
iproute2\
iptables\
iputils\
iso-codes\
ispc\
iwd\
iwgtk\
jansson\
jasper\
jbigkit\
jemalloc\
jq\
json-c\
json-glib\
jsoncpp\
jxrlib\
karchive\
kauth\
kbd\
kbookmarks\
kcmutils\
kcodecs\
kcolorscheme\
kcompletion\
kconfig\
kconfigwidgets\
kcoreaddons\
kcrash\
kdbusaddons\
kdnssd\
kdsoap-qt6\
kdsoap-ws-discovery-client\
keyutils\
kglobalaccel\
kguiaddons\
ki18n\
kiconthemes\
kio\
kio-extras\
kirigami\
kitemmodels\
kitemviews\
kitty\
kitty-shell-integration\
kitty-terminfo\
kjobwidgets\
kmod\
knotifications\
krb5\
kservice\
ktextwidgets\
kwallet\
kwidgetsaddons\
kwindowsystem\
kxmlgui\
l-smash\
lame\
lapack\
lcms2\
ldb\
libadwaita\
libaec\
libarchive\
libass\
libassuan\
libasyncns\
libatasmart\
libavc1394\
libb2\
libblockdev\
libblockdev-crypto\
libblockdev-fs\
libblockdev-loop\
libblockdev-mdraid\
libblockdev-nvme\
libblockdev-part\
libblockdev-swap\
libbluray\
libbpf\
libbs2b\
libbsd\
libbytesize\
libcamera\
libcamera-ipa\
libcanberra\
libcap\
libcap-ng\
libcdio\
libcdio-paranoia\
libcloudproviders\
libcolord\
libcups\
libdaemon\
libdatrie\
libdbusmenu-glib\
libdbusmenu-gtk3\
libdca\
libde265\
libdeflate\
libdispatch\
libdisplay-info\
libdovi\
libdrm\
libdvbpsi\
libdvdnav\
libdvdread\
libebml\
libedit\
libei\
libelf\
libepoxy\
libevdev\
libevent\
libexif\
libfabric\
libfdk-aac\
libffi\
libfontenc\
libfreeaptx\
libgcrypt\
libgedit-amtk\
libgedit-gfls\
libgedit-gtksourceview\
libgedit-tepl\
libgirepository\
libglvnd\
libgnomekbd\
libgpg-error\
libgtop\
libgudev\
libhandy\
libheif\
libice\
libidn\
libidn2\
libiec61883\
libimobiledevice\
libimobiledevice-glue\
libinih\
libinput\
libisl\
libjpeg-turbo\
libjxl\
libkexiv2\
libksba\
liblc3\
libldac\
libldap\
libliftoff\
libmad\
libmatroska\
libmd\
libmfx\
libmm-glib\
libmng\
libmnl\
libmodplug\
libmpc\
libmpcdec\
libmpdclient\
libmpeg2\
libmtp\
libmysofa\
libnetfilter_conntrack\
libnfnetlink\
libnftnl\
libnghttp2\
libnghttp3\
libnice\
libnl\
libnotify\
libnsl\
libnvme\
libogg\
libomxil-bellagio\
libopenmpt\
libp11-kit\
libpcap\
libpciaccess\
libpeas\
libpipewire\
libplacebo\
libplist\
libpng\
libproxy\
libpsl\
libpulse\
libpwquality\
libraw\
libraw1394\
librsvg\
librsync\
libsamplerate\
libsasl\
libseccomp\
libsecret\
libsigc++\
libsigc++-3.0\
libsixel\
libsm\
libsndfile\
libsoup3\
libsoxr\
libssh\
libssh2\
libstemmer\
libsynctex\
libsysprof-capture\
libtar\
libtasn1\
libthai\
libtheora\
libtiff\
libtirpc\
libtool\
libunibreak\
libunistring\
libunwind\
libupnp\
libusb\
libusbmuxd\
libuv\
libva\
libva-intel-driver\
libva-mesa-driver\
libvdpau\
libverto\
libvorbis\
libvpl\
libvpx\
libwacom\
libwbclient\
libwebp\
libwireplumber\
libx11\
libxau\
libxcb\
libxcomposite\
libxcrypt\
libxcursor\
libxcvt\
libxdamage\
libxdmcp\
libxext\
libxfce4ui\
libxfce4util\
libxfixes\
libxfont2\
libxft\
libxi\
libxinerama\
libxkbcommon\
libxkbcommon-x11\
libxkbfile\
libxklavier\
libxml2\
libxmlb\
libxmu\
libxpm\
libxpresent\
libxrandr\
libxrender\
libxshmfence\
libxslt\
libxss\
libxt\
libxtst\
libxv\
libxxf86vm\
libyaml\
libzip\
licenses\
lilv\
linux-api-headers\
linux-firmware\
linux-firmware-whence\
linux-lts\
llvm\
llvm-libs\
lm_sensors\
lmdb\
log4cplus\
lsb-release\
lua\
luajit\
lv2\
lz4\
lzo\
m4\
make\
materialx\
mc\
md4c\
mdadm\
media-player-info\
mesa\
meson\
minizip\
minizip-ng\
mkinitcpio\
mkinitcpio-busybox\
mpdecimal\
mpfr\
mpg123\
mpv\
mtdev\
mujs\
nano\
ncurses\
netcdf\
nettle\
ninja\
nlohmann-json\
noto-fonts\
noto-fonts-emoji\
noto-fonts-extra\
npth\
nspr\
nss\
ntfs-3g\
numactl\
nwg-look\
ocl-icd\
onetbb\
oniguruma\
openal\
opencascade\
opencolorio\
opencore-amr\
openexr\
openimagedenoise\
openimageio\
openjpeg2\
openmpi\
openpmix\
openshadinglanguage\
openssh\
openssl\
opensubdiv\
openucx\
openvdb\
openvkl\
openvpn\
opus\
orc\
ospray\
otf-font-awesome\
p11-kit\
p7zip\
pacman\
pacman-mirrorlist\
pam\
pambase\
pango\
pangomm\
papirus-icon-theme\
parted\
patch\
pciutils\
pcre\
pcre2\
pcsclite\
perl\
perl-error\
perl-mailtools\
perl-timedate\
phonon-qt6\
phonon-qt6-vlc\
pinentry\
pipewire\
pipewire-alsa\
pipewire-audio\
pipewire-jack\
pipewire-pulse\
pixman\
pkcs11-helper\
pkgconf\
plasma-activities\
playerctl\
polkit\
polkit-qt6\
poppler\
poppler-glib\
popt\
portaudio\
procps-ng\
protobuf\
prrte\
psmisc\
ptex\
pugixml\
pybind11\
pyside6\
pystring\
python\
python-autocommand\
python-dbus\
python-fastjsonschema\
python-gobject\
python-inflect\
python-jaraco.context\
python-jaraco.functools\
python-jaraco.text\
python-jinja\
python-mako\
python-markdown\
python-markupsafe\
python-more-itertools\
python-numpy\
python-opengl\
python-ordered-set\
python-packaging\
python-platformdirs\
python-setproctitle\
python-setuptools\
python-tomli\
python-tqdm\
python-trove-classifiers\
python-typeguard\
python-typing_extensions\
python-validate-pyproject\
qca-qt6\
qrencode\
qt5-base\
qt5-declarative\
qt5-svg\
qt5-translations\
qt5-wayland\
qt5-x11extras\
qt6-5compat\
qt6-base\
qt6-declarative\
qt6-imageformats\
qt6-multimedia\
qt6-multimedia-ffmpeg\
qt6-shadertools\
qt6-speech\
qt6-svg\
qt6-translations\
qt6-wayland\
rav1e\
readline\
rhash\
rkcommon\
rnnoise\
rtkit\
rubberband\
sbc\
sdbus-cpp\
sddm\
sdl2\
seatd\
sed\
serd\
shaderc\
shadow\
shared-mime-info\
shiboken6\
slang\
smartmontools\
smbclient\
snappy\
sndio\
sof-firmware\
solid\
sonnet\
sord\
sound-theme-freedesktop\
spdlog\
speex\
speexdsp\
spirv-llvm-translator\
spirv-tools\
sqlite\
squashfs-tools\
sratom\
srt\
startup-notification\
sudo\
svt-av1\
syntax-highlighting\
systemd\
systemd-libs\
systemd-sysvcompat\
taglib\
talloc\
tar\
tcl\
tdb\
telegram-desktop\
tevent\
texinfo\
thunar\
tinyxml\
tk\
tomlplusplus\
tpm2-tss\
tracker3\
tslib\
ttf-caladea\
ttf-carlito\
ttf-font-awesome\
ttf-liberation\
ttf-material-design-icons-webfont\
ttf-nerd-fonts-symbols\
ttf-nerd-fonts-symbols-common\
ttf-roboto\
ttf-roboto-mono\
tzdata\
uchardet\
udisks2\
unrar\
unzip\
upower\
usd\
util-linux\
util-linux-libs\
v4l-utils\
vapoursynth\
verdict\
vid.stab\
vim\
vim-runtime\
vlc\
vmaf\
volume_key\
vscodium-bin\
vtk\
vulkan-headers\
vulkan-icd-loader\
vulkan-intel\
vulkan-radeon\
vulkan-validation-layers\
waybar\
wayland\
wayland-protocols\
webrtc-audio-processing-1\
wget\
which\
wireless_tools\
wireplumber\
wlogout-git\
wlroots\
wofi\
wpa_supplicant\
wqy-microhei\
x264\
x265\
xapp\
xcb-proto\
xcb-util\
xcb-util-cursor\
xcb-util-errors\
xcb-util-image\
xcb-util-keysyms\
xcb-util-renderutil\
xcb-util-wm\
xcur2png\
xdg-desktop-portal\
xdg-desktop-portal-hyprland\
xdg-utils\
xf86-input-libinput\
xf86-video-amdgpu\
xf86-video-ati\
xf86-video-nouveau\
xf86-video-vmware\
xfconf\
xkeyboard-config\
xorg-fonts-encodings\
xorg-server\
xorg-server-common\
xorg-setxkbmap\
xorg-xauth\
xorg-xinit\
xorg-xinput\
xorg-xkbcomp\
xorg-xmodmap\
xorg-xprop\
xorg-xrandr\
xorg-xrdb\
xorg-xset\
xorg-xwayland\
xorgproto\
xvidcore\
xxhash\
xz\
yaml-cpp\
yandex-browser\
yay\
yay-debug\
yyjson\
zathura\
zathura-djvu\
zathura-pdf-poppler\
zenity\
zimg\
zix\
zlib\
zram-generator\
zsh\
zstd\
fi
