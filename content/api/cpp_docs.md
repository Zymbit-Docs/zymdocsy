---
title: C++ API Documentation
description: C++ interface to Zymkey Application Utilities Library.
lastmod:
draft: false
images: []
type: docs
layout: single
weight: 0
toc: false
---

<div>
    <h2>Introduction</h2>
    <p>C++ interface to Zymkey Application Utilities Library.</p>
    <p>This file contains the C API to the the Zymkey Application Utilities library. This API facilitates writing user space applications which use Zymkey to perform cryptographic operations, such as:</p>
    <ol>
        <li>Signing of payloads using ECDSA.</li>
        <li>Verification of payloads that were signed using Zymkey.</li>
        <li>Exporting the public key that matches Zymkey&#8217;s private key.</li>
        <li>&#8221;Locking&#8221; and &#8220;unlocking&#8221; data objects.</li>
        <li>Generating random data. Additionally, there are functions for changing the i2c address (i2c units only), setting tap sensitivity and controlling the LED.</li>
    </ol>
</div>
<div>
    <h2>Classes</h2>
    <div class="class">
        <span class="signature">
            <span class="annotation">class</span>
            <span class="name">zkClass</span>
        </span>
        <div>
            <p>The main class.</p>
            <div class="method">
                <span class="signature">
                    <span class="returns"></span>
                    <span class="pointer-ref"></span>
                    <span class="name">zkClass</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Constructor: a Zymkey context is opened.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns"></span>
                    <span class="pointer-ref"></span>
                    <span class="annotation">virtual</span>
                    <span class="name">~zkClass</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description"></div>
                    <p>Destructor: the Zymkey context is closed.</p>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">createRandDataFile</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">dst_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">rdata_sz</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Write random data to a file.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">dst_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">rdata_sz</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">getRandBytes</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">rdata_sz</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate a block of random data.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">rdata_sz</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">lockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_pt_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">dst_ct_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Locks data from a plaintext source file and stores locked data object to a destination file.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_pt_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">dst_ct_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">lockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_pt_data</span>
                        </span>
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">dst_ct_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Locks data from a plaintext source byte container and stores locked data object to a destination file.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_pt_data</span>
                            </li>
                            <li class="param-item">
                                <span class="name">dst_ct_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">lockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_pt_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Locks data from a plaintext source file and stores locked data object in a container of unsigned bytes.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_pt_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">lockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_pt_data</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Locks data from a plaintext source byte container and stores locked data object in a container of unsigned bytes.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_pt_data</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">unlockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_ct_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">dst_pt_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Unocks a locked data object from source file and stores unlocked data object to a destination file.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_ct_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">dst_pt_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">unlockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_ct_data</span>
                        </span>
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">dst_pt_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Unlocks a locked data object contained in an unsigned byte container and stores plaintext data to a destination file.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_ct_data</span>
                            </li>
                            <li class="param-item">
                                <span class="name">dst_pt_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">unlockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_ct_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Unlocks a locked data object from a plaintext source file and stores plaintext data in a container of unsigned bytes.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_ct_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">unlockData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation">const</span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">src_ct_bytes</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">use_shared_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Unlocks a locked data object contained in an unsigned byte container and stores plaintext data in a container of unsigned bytes.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">src_ct_data</span>
                            </li>
                            <li class="param-item">
                                <span class="name">use_shared_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">genECDSASigFromDigest</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">digest</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate a signature from a data digest using the Zymkey&#8217;s private key.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">digest</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">bool</span>
                    <span class="pointer-ref"></span>
                    <span class="name">verifyECDSASigFromDigest</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">digest</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">sig</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pub_key_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pub_key_is_foreign</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Verify a signature from a data digest using the Zymkey&#8217;s public key. The public key is not given as an input. Rather, the Zymkey uses its own copy of the private key. This insures that the public key that matches the private key is used.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">digest</span>
                            </li>
                            <li class="param-item">
                                <span class="name">sig</span>
                            </li>
                            <li class="param-item">
                                <span class="name">pub_key_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">pub_key_is_foreign</span>
                            </li>
                            <li class="param-item">
                                <span class="name">pub_key_is_foreign</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">doRawECDH</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">peer_pubkey</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Perform a raw ECDH operation. (model &gt;= HSM6).</p>
                        <p>Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is presented in the call.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">doRawECDHWithIntPeerPubkey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">peer_pubkey_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">peer_pubkey_slot_is_foreign</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Perform a raw ECDH operation. (model &gt;= HSM6).</p>
                        <p>Perform an ECDH operation with no Key Derivation Function (KDF). The raw pre-master secret is returned in the response. The peer public key is referenced from the zymkey internal key store.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey_slot_is_foreign</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">doECDHAndKDF</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_ECDH_KDF_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">kdf_type</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">peer_pubkey</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">salt</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">info</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">num_iterations</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">derived_key_sz</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6).</p>
                        <p>Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is presented in the call.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey</span>
                            </li>
                            <li class="param-item">
                                <span class="name">salt</span>
                            </li>
                            <li class="param-item">
                                <span class="name">info</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_iterations</span>
                            </li>
                            <li class="param-item">
                                <span class="name">derived_key_sz</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">doECDHAndKDFWithIntPeerPubkey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_ECDH_KDF_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">kdf_type</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">peer_pubkey_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">peer_pubkey_slot_is_foreign</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">salt</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">info</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">num_iterations</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">derived_key_sz</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Perform an ECDH operation plus Key Derivation Function. (model &gt;= HSM6).</p>
                        <p>Perform an ECDH operation with Key Derivation Function (KDF). The derived key is returned in the response. The peer public key is referenced from the zymkey internal key store.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">peer_pubkey_slot_is_foreign</span>
                            </li>
                            <li class="param-item">
                                <span class="name">salt</span>
                            </li>
                            <li class="param-item">
                                <span class="name">info</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_iterations</span>
                            </li>
                            <li class="param-item">
                                <span class="name">derived_key_sz</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">saveECDSAPubKey2File</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref"></span>
                            <span class="name">dst_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>[DEPRECATED] Use exportPubKey2File. Save the public key that matches the Zymkey&#8217;s private key into a PEM formatted file. Mainly used for Certificate Signing Request (CSR) generation.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">dst_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">exportPubKey2File</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref"></span>
                            <span class="name">dst_filename</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pubkey_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot_is_foreign</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Store the public key to a host file in PEM format.</p>
                        <p>This function is useful for generating Certificate Signing Requests (CSR).</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">dst_filename</span>
                            </li>
                            <li class="param-item">
                                <span class="name">pubkey_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot_is_foreign</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">getECDSAPubKey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>[DEPRECATED] Use exportPubKey. Get a container of bytes which contains the ECDSA public key.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">byteArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">exportPubKey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pubkey_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot_is_foreign</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Gets the public key and stores in a byte array created by this function.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">pubkey_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot_is_foreign</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">intArray</span>
                    <span class="pointer-ref">*</span>
                    <span class="name">getAllocSlotsList</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">foreign_key_pool</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Get the list of allocated keys. (model &gt;= HSM6).</p>
                        <p>This function returns a list of all allocated key slots.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">foreign_key_pool</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">storeForeignPubKey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_EC_KEY_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pk_type</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">pk</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Store a new foreign public key in Zymkey. (model &gt;= HSM6).</p>
                        <p>This function stores a new foreign public key in the Zymkey public key ring. This public key can be used for signature verification in use cases where it is desirable to hide the public key.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">pk_type</span>
                            </li>
                            <li class="param-item">
                                <span class="name">pk</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">disablePubKeyExport</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pubkey_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot_is_foreign</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Prevent a public key from being exported to the host. (model &gt;= HSM6).</p>
                        <p>This function prevents the public key at the specified slot from being exported to the host using the API zkExportPubKey.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">pubkey_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot_is_foreign</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">genKeyPair</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_EC_KEY_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">type</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate a new persistent key pair. (model &gt;= HSM6).</p>
                        <p>This function generates a new key pair of the specified type and store it persistently. This key pair cannot be used as part of the zymkey&#8217;s digital wallet operations.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">type</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">genEphemeralKeyPair</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_EC_KEY_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">type</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate an ephemeral key pair. (model &gt;= HSM6).</p>
                        <p>This function generates an ephemeral key pair of the specified type. Ephemeral key pairs are useful when performing ECDH for time-of-flight encryption. Only one ephemeral key slot is available and is not persistent between reboots.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">type</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">removeKey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot_is_foreign</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Remove a key pair or a foreign public key. (model &gt;= HSM6).</p>
                        <p>This function deletes a key pair or a foreign public key from persistent storage.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">slot_is_foreign</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">invalidateEphemeralKey</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Invalidate the ephemeral key. (model &gt;= HSM6).</p>
                        <p>This function invalidates the ephemeral key.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">genBIP32WalletMasterSeed</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_EC_KEY_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">type</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">wallet_name</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">master_generator_key</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate a BIP32 master seed to start a new blockchain wallet. (model &gt;= HSM6).</p>
                        <p>This function generates a new blockchain master seed for creating a new wallet per BIP32.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">type</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_generator_key</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">std::string *</span>
                    <span class="pointer-ref"></span>
                    <span class="name">genBIP39WalletMasterSeed</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_EC_KEY_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">type</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">wallet_name</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">master_generator_key</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref">*</span>
                            <span class="name">slot_num</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate a BIP39 master seed to start a new blockchain wallet. (model &gt;= HSM6).</p>
                        <p>This function generates a new blockchain master seed for creating a new wallet per BIP39.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">type</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_generator_key</span>
                            </li>
                            <li class="param-item">
                                <span class="name">(output)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">genWalletChildKey</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">parent_key_slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">index</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">is_hardened</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Generate child key from a parent key in a blockchain wallet . (model &gt;= HSM6).</p>
                        <p>This function generates a new child key descendent from a specified parent key in a wallet.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">parent_key_slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">index</span>
                            </li>
                            <li class="param-item">
                                <span class="name">is_hardened</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">restoreWalletMasterSeedFromBIP39Mnemonic</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_EC_KEY_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">type</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">wallet_name</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::byteArray</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">master_generator_key</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">bip39_mnemonic</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Restore a master seed from a BIP39 mnemonic and a master generator key. (model &gt;= HSM6).</p>
                        <p>This function restores a wallet master seed from a supplied BIP39 mnemonic string and a master generator key.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">type</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_generator_key</span>
                            </li>
                            <li class="param-item">
                                <span class="name">bip39_mnemonic</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getWalletNodeAddrFromKeySlot</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">slot</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">*</span>
                            <span class="name">out_node_addr</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">*</span>
                            <span class="name">out_wallet_name</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Derive the node address from a key slot number. (model &gt;= HSM6).</p>
                        <p>This function derives a node address from an input key slot number.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">slot</span>
                            </li>
                            <li class="param-item">
                                <span class="name">out_node_addr</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">int</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getWalletKeySlotFromNodeAddr</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">node_addr</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">std::string</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">wallet_name</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">master_seed_slot</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Derive the slot address from a node address. (model &gt;= HSM6).</p>
                        <p>This function returns the slot number associated with a given node address.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">node_addr</span>
                            </li>
                            <li class="param-item">
                                <span class="name">wallet_name</span>
                            </li>
                            <li class="param-item">
                                <span class="name">master_seed_slot</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">ledOff</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Turn LED off.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">ledOn</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Turn LED on.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">ledFlash</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">on_ms</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">off_ms</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">num_flashes</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Flash LED a certain number of times.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">on_ms</span>
                            </li>
                            <li class="param-item">
                                <span class="name">off_ms</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_flashes</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setI2CAddr</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">addr</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Sets the i2c address (i2c versions only). Used in case of i2c bus device address conflict.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">addr</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">uint32_t</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getTime</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref"></span>
                            <span class="name">precise_time</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Get current GMT time.</p>
                        <p>This method is called to get the time directly from a Zymkey&#8217;s Real Time Clock (RTC).</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">precise_time</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setTapSensitivity</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">float</span>
                            <span class="pointer-ref"></span>
                            <span class="name">pct</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_ACCEL_AXIS_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">axis</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Sets the sensitivity of the tap detection as a percentage for an individual axis or all axes.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">pct</span>
                            </li>
                            <li class="param-item">
                                <span class="name">axis</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">waitForTap</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">timeout_ms</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Wait for a tap event to be detected.</p>
                        <p>This function is called in order to wait for a tap event to occur. This function blocks the calling thread unless called with a timeout of zero.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">timeout_ms</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsTimeoutException</span>
                                <span class="description">upon timeout or zkAppUtilsException upon other errors</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getAccelerometerData</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">zkAppUtils::accelData</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">accel_data</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Get current accelerometer data and tap info.</p>
                        <p>This function gets the most recent accelerometer data in units of g forces plus the tap direction per axis. Array index 0 = x 1 = y 2 = z.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">accel_data</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">lockBinding</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Set soft binding lock.</p>
                        <p>This function locks the binding for a specific HSM. This API is only valid for HSM series products.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getCurrentBindingInfo</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">binding_is_locked</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">bool</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">is_bound</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Get current binding info.</p>
                        <p>This function gets the current binding lock state as well as the current binding state. This API is only valid for devices in the HSM family.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">binding_is_locked</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setPerimeterEventAction</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">channel</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">action_flags</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description"></div>
                    <p>Set perimeter breach action.</p>
                    <p>This function specifies the action to take when a perimeter breach event occurs. The possible actions are any combination of:</p>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setDigitalPerimeterDetectLPPeriod</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">lp_period</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Set the low power period (model &gt;= HSM6).</p>
                        <p>This function sets low power period on the digital perimeter detect.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">lp_period</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setDigitalPerimeterDetectLPMaxBits</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">max_num_bits</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Set the low power max number of bits (model &gt;= HSM6).</p>
                        <p>This function sets low power max number of bits on the digital perimeter detect.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">max_num_bits</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setDigitalPerimeterDetectDelays</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">min_delay_ns</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref"></span>
                            <span class="name">max_delay_ns</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Set the delays (model &gt;= HSM6).</p>
                        <p>This function sets delays on the digital perimeter detect.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">min_delay_ns</span>
                            </li>
                            <li class="param-item">
                                <span class="name">max_delay_ns</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">waitForPerimeterEvent</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref"></span>
                            <span class="name">timeout_ms</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Wait for a perimeter breach event to be detected.</p>
                        <p>This function is called in order to wait for a perimeter breach event to occur. This function blocks the calling thread unless called with a timeout of zero. Note that, in order to receive perimeter events, the zymkey must have been configured to notify the host on either or both of the perimeter detect channels via a call to &#8220;zkSetPerimeterEventAction&#8221;.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">timeout_ms</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getPerimeterDetectInfo</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">uint32_t</span>
                            <span class="pointer-ref">**</span>
                            <span class="name">timestamp_sec</span>
                        </span>
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">int</span>
                            <span class="pointer-ref">&amp;</span>
                            <span class="name">num_timestamps</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Get current perimeter detect info.</p>
                        <p>This function gets the timestamp of the first perimeter detect event for the given channel.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">timestamps_sec</span>
                            </li>
                            <li class="param-item">
                                <span class="name">num_timestamps</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">clearPerimeterDetectEvents</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Clear perimeter detect info.</p>
                        <p>This function clears all perimeter detect info and rearms all perimeter detect channels.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">std::string *</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getModelNumberString</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Get Zymkey model number.</p>
                        <p>This function retrieves the model number of the zymkey referred to in a specified context.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">std::string *</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getFirmwareVersionString</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Get Zymkey firmware version.</p>
                        <p>This function retrieves the firmware version of the zymkey referred to in a specified context.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">std::string *</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getSerialNumberString</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Get Zymkey serial number.</p>
                        <p>This function retrieves the serial number of the zymkey referred to in a specified context.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">float</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getCPUTemp</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Get the CPU Temp. (model &gt;= HSM6).</p>
                        <p>This function gets the current HSM CPU temp.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">float</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getRTCDrift</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Get the RTC drift. (model &gt;= HSM6).</p>
                        <p>This function gets the current RTC drift.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">float</span>
                    <span class="pointer-ref"></span>
                    <span class="name">getBatteryVoltage</span>
                    <span class="param-list"></span>
                </span>
                <div>
                    <div class="description">
                        <p>Get the battery voltage(model &gt;= HSM6).</p>
                        <p>This function gets the current battery voltage.</p>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setBatteryVoltageAction</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_THRESHOLD_ACTION_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">action</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description"></div>
                    <p>Set battery voltage threshold action. (model &gt;= HSM6).</p>
                    <p>This function specifies the action to take when the battery voltage falls below the threshold set by zkSetBatteryVoltageThreshold. If this function is never called, do nothing is default. There are three actions:</p>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setBatteryVoltageThreshold</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">float</span>
                            <span class="pointer-ref"></span>
                            <span class="name">threshold</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Sets the battery voltage threshold. (model &gt;= HSM6).</p>
                        <p>This function sets the threshold at which if the battery voltage falls bellow, the action set by zkSetBatteryVoltageAction will be carried out. The recommended threshold is 2.3V. If this function isn&#8217;t called 2.5V is assumed by default.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">threshold</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setCPUTempAction</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">ZK_THRESHOLD_ACTION_TYPE</span>
                            <span class="pointer-ref"></span>
                            <span class="name">action</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description"></div>
                    <p>Set HSM CPU temperature threshold action. (model &gt;= HSM6).</p>
                    <p>This function specifies the action to take when the HSM CPU temperature falls below the threshold set by zkSetCPULowTempThreshold, or rises above the threshold set by zkSetCPUHighTempThreshold. There are two actions to apply:</p>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setCPULowTempThreshold</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">float</span>
                            <span class="pointer-ref"></span>
                            <span class="name">threshold</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Sets the HSM CPU low temperature threshold. (model &gt;= HSM6).</p>
                        <p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature falls below, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold above the CPU&#8217;s ambient temperature. The recommended setting is no more than 20C. If no threshold is set, -10 degrees Celsius is set as default.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">threshold</span>
                            </li>
                        </ul>
                    </div>
                    <div class="exceptions">
                        <span>Exceptions</span>
                        <ul>
                            <li class="exc-item">
                                <span class="name">zkAppUtilsException</span>
                                <span class="description">upon error</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="method">
                <span class="signature">
                    <span class="returns">void</span>
                    <span class="pointer-ref"></span>
                    <span class="name">setCPUHighTempThreshold</span>
                    <span class="param-list">
                        <span class="param">
                            <span class="annotation"></span>
                            <span class="type">float</span>
                            <span class="pointer-ref"></span>
                            <span class="name">threshold</span>
                        </span>
                    </span>
                </span>
                <div>
                    <div class="description">
                        <p>Sets the HSM CPU high temperature threshold. (model &gt;= HSM6).</p>
                        <p>This function sets the threshold at which if the on-board HSM CPU&#8217;s tempreature rises above, the action set by zkSetCPUTempAction will be carried out. WARNING: You can lock yourself out in dev mode if you set a threshold below the CPU&#8217;s ambient temperature. The recommended setting is no less than 40C. If no threshold is set, 65 degrees celsius is set as default.</p>
                    </div>
                    <div class="parameters">
                        <span>Parameters</span>
                        <ul>
                            <li class="param-item">
                                <span class="name">threshold</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
