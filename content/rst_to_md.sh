FILES=`find . -type f -name "*.rst"`
for f in $FILES
do
    filename="${f%.*}"
    echo "converting $f to $filename.md"
    `pandoc $f -f rst -t markdown -o $filename.md`
done
