cmd_Release/obj.target/secp256k1/src/secp256k1/src/secp256k1.o := cc -o Release/obj.target/secp256k1/src/secp256k1/src/secp256k1.o ../src/secp256k1/src/secp256k1.c '-DNODE_GYP_MODULE_NAME=secp256k1' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DECMULT_GEN_PREC_BITS=4' '-DECMULT_WINDOW_SIZE=15' '-DENABLE_MODULE_ECDH=1' '-DENABLE_MODULE_RECOVERY=1' '-DUSE_ENDOMORPHISM=1' '-DUSE_NUM_NONE=1' '-DUSE_FIELD_INV_BUILTIN=1' '-DUSE_SCALAR_INV_BUILTIN=1' '-DHAVE___INT128=1' '-DUSE_ASM_X86_64=1' '-DUSE_FIELD_5X52=1' '-DUSE_SCALAR_4X64=1' -I/root/.cache/node-gyp/12.18.2/include/node -I/root/.cache/node-gyp/12.18.2/src -I/root/.cache/node-gyp/12.18.2/deps/openssl/config -I/root/.cache/node-gyp/12.18.2/deps/openssl/openssl/include -I/root/.cache/node-gyp/12.18.2/deps/uv/include -I/root/.cache/node-gyp/12.18.2/deps/zlib -I/root/.cache/node-gyp/12.18.2/deps/v8/include -I../src/secp256k1 -I../src/secp256k1/src  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -fPIC -Wno-unused-function -Wno-nonnull-compare -O3 -fno-omit-frame-pointer  -MMD -MF ./Release/.deps/Release/obj.target/secp256k1/src/secp256k1/src/secp256k1.o.d.raw   -c
Release/obj.target/secp256k1/src/secp256k1/src/secp256k1.o: \
 ../src/secp256k1/src/secp256k1.c ../src/secp256k1/include/secp256k1.h \
 ../src/secp256k1/include/secp256k1_preallocated.h \
 ../src/secp256k1/include/secp256k1.h ../src/secp256k1/src/util.h \
 ../src/secp256k1/src/num_impl.h ../src/secp256k1/src/num.h \
 ../src/secp256k1/src/field_impl.h ../src/secp256k1/src/field_5x52_impl.h \
 ../src/secp256k1/src/field.h ../src/secp256k1/src/field_5x52.h \
 ../src/secp256k1/src/field_5x52_asm_impl.h \
 ../src/secp256k1/src/scalar_impl.h ../src/secp256k1/src/scalar.h \
 ../src/secp256k1/src/scalar_4x64.h \
 ../src/secp256k1/src/scalar_4x64_impl.h \
 ../src/secp256k1/src/group_impl.h ../src/secp256k1/src/group.h \
 ../src/secp256k1/src/ecmult_impl.h ../src/secp256k1/src/ecmult.h \
 ../src/secp256k1/src/scratch.h ../src/secp256k1/src/ecmult_const_impl.h \
 ../src/secp256k1/src/ecmult_const.h \
 ../src/secp256k1/src/ecmult_gen_impl.h ../src/secp256k1/src/ecmult_gen.h \
 ../src/secp256k1/src/hash_impl.h ../src/secp256k1/src/hash.h \
 ../src/secp256k1/src/ecdsa_impl.h ../src/secp256k1/src/ecdsa.h \
 ../src/secp256k1/src/eckey_impl.h ../src/secp256k1/src/eckey.h \
 ../src/secp256k1/src/scratch_impl.h \
 ../src/secp256k1/src/modules/ecdh/main_impl.h \
 ../src/secp256k1/include/secp256k1_ecdh.h \
 ../src/secp256k1/src/ecmult_const_impl.h \
 ../src/secp256k1/src/modules/recovery/main_impl.h \
 ../src/secp256k1/include/secp256k1_recovery.h
../src/secp256k1/src/secp256k1.c:
../src/secp256k1/include/secp256k1.h:
../src/secp256k1/include/secp256k1_preallocated.h:
../src/secp256k1/include/secp256k1.h:
../src/secp256k1/src/util.h:
../src/secp256k1/src/num_impl.h:
../src/secp256k1/src/num.h:
../src/secp256k1/src/field_impl.h:
../src/secp256k1/src/field_5x52_impl.h:
../src/secp256k1/src/field.h:
../src/secp256k1/src/field_5x52.h:
../src/secp256k1/src/field_5x52_asm_impl.h:
../src/secp256k1/src/scalar_impl.h:
../src/secp256k1/src/scalar.h:
../src/secp256k1/src/scalar_4x64.h:
../src/secp256k1/src/scalar_4x64_impl.h:
../src/secp256k1/src/group_impl.h:
../src/secp256k1/src/group.h:
../src/secp256k1/src/ecmult_impl.h:
../src/secp256k1/src/ecmult.h:
../src/secp256k1/src/scratch.h:
../src/secp256k1/src/ecmult_const_impl.h:
../src/secp256k1/src/ecmult_const.h:
../src/secp256k1/src/ecmult_gen_impl.h:
../src/secp256k1/src/ecmult_gen.h:
../src/secp256k1/src/hash_impl.h:
../src/secp256k1/src/hash.h:
../src/secp256k1/src/ecdsa_impl.h:
../src/secp256k1/src/ecdsa.h:
../src/secp256k1/src/eckey_impl.h:
../src/secp256k1/src/eckey.h:
../src/secp256k1/src/scratch_impl.h:
../src/secp256k1/src/modules/ecdh/main_impl.h:
../src/secp256k1/include/secp256k1_ecdh.h:
../src/secp256k1/src/ecmult_const_impl.h:
../src/secp256k1/src/modules/recovery/main_impl.h:
../src/secp256k1/include/secp256k1_recovery.h:
