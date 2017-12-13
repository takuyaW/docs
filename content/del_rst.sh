FILES=`find . -type f -name "*.rst"`
for f in $FILES
do
    echo "delete $f"
    `rm $f`
done
